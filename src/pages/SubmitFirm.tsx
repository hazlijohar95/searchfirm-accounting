
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '@/components/ui/form-input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { states } from '@/data/states';
import SEO from '@/components/SEO';

const SubmitFirm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    state: '',
    phoneNumber: '',
    email: '',
    website: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real app, this would be an API call
      // For now, we'll just show a success message
      toast.success("Thank you! Your submission has been received and will be reviewed shortly.");
      navigate('/');
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-custom">
      <SEO 
        title="Submit New Firm" 
        description="Submit a new accounting firm to our directory. Help us build a comprehensive listing of accounting firms in Malaysia."
      />
      
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Submit New Firm
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Firm Name"
              name="name"
              value={formData.name}
              onChange={(value) => handleChange('name', value)}
              required
            />
            
            <FormInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={(value) => handleChange('address', value)}
              required
            />
            
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-900">
                State<span className="text-red-500 ml-1">*</span>
              </label>
              <Select 
                value={formData.state} 
                onValueChange={(value) => handleChange('state', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(value) => handleChange('phoneNumber', value)}
              required
            />
            
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(value) => handleChange('email', value)}
              required
            />
            
            <FormInput
              label="Website"
              name="website"
              value={formData.website}
              onChange={(value) => handleChange('website', value)}
              placeholder="https://"
            />
            
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Submit Firm
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubmitFirm;

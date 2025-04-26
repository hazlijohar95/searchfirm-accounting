
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import SEO from '@/components/SEO';

const ApiDocs = () => {
  return (
    <div className="page-container prose max-w-none">
      <SEO 
        title="API Documentation - SearchFirm"
        description="Public API documentation for the SearchFirm directory"
      />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600">
          SearchFirm provides a free, public API for accessing our directory of accounting firms.
        </p>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          Our API is free to use and requires no authentication. All endpoints return JSON and follow
          RESTful principles.
        </p>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">Base URL: https://searchfirm.lovable.dev/api</code>
        </div>
      </Card>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Available Endpoints</h2>
          
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-medium mb-2">GET /firms</h3>
            <p className="text-gray-600 mb-4">Returns a list of all accounting firms.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm">
                GET /api/firms
              </pre>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-medium mb-2">GET /firms/:id</h3>
            <p className="text-gray-600 mb-4">Returns a single firm by ID.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm">
                GET /api/firms/1
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-medium mb-2">GET /states</h3>
            <p className="text-gray-600 mb-4">Returns a list of all states where firms are located.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm">
                GET /api/states
              </pre>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Rate Limiting</h2>
          <Card className="p-6">
            <p className="mb-4">To ensure fair usage, the API has the following limits:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Maximum of 60 requests per minute</li>
              <li>Maximum of 1000 requests per day</li>
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <Card className="p-6">
            <p className="mb-4">
              Need help? Check out our{' '}
              <Link to="/docs" className="text-black underline">
                documentation
              </Link>{' '}
              or{' '}
              <a
                href="https://github.com/your-username/searchfirm/issues"
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                open an issue
              </a>
              .
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ApiDocs;

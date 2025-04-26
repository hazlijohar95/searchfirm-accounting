
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  firmName?: string;
}

const SEO = ({
  title,
  description = "Directory of accounting firms in Malaysia with searchable and filterable listings.",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl,
  type = "website",
  firmName
}: SEOProps) => {
  const siteTitle = "Malaysia Accounting Firm Directory";
  const fullTitle = firmName ? `${firmName} | ${siteTitle}` : title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = window.location.origin;
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;

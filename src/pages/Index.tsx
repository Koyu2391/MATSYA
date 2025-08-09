import Seo from "@/components/Seo";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import DemoMock from "@/components/home/DemoMock";

const Index = () => {
  return (
    <>
      <Seo
        title="MATSYA AI — AI-powered Transcription, Translation & Summarization"
        description="Process audio into transcripts with speakers & timestamps, translations, and summaries."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MATSYA AI',
          applicationCategory: 'MultimediaApplication',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'AI platform for transcription, translation and summarization of audio files.'
        }}
      />
      <Hero />
      <Features />
      <DemoMock />
    </>
  );
};

export default Index;

import FlipCard from '@/components/Home/FlipCard';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      home page
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <FlipCard />
        </div>
      </div>
    </Layout>
  );
}

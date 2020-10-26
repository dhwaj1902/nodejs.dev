import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { ReleaseData } from '../../hooks/useReleaseHistory';
interface Props {
  release?: ReleaseData;
}
export default function DownloadPage({data}): JSX.Element {
  const title = 'Community Page';
  const description = 'Community page';
  const commCommData = data.page.html;
  return (
    <Layout title={title} description={description}>
      <main>
        <DownloadHeader />
        <article style={{ width: '100%' }} className="article-reader">
          <h1>The Node.js Community</h1>
          <div dangerouslySetInnerHTML={{ __html: commCommData }}></div> 
         
        </article>
      </main>
    </Layout>
  );
}

const DownloadHeader = ({ release }: Props): JSX.Element =>  {
  const nodev = release?.version;
  const npmv = release?.npm;
  const lts = release?.lts;

  return (
    <>
      <div className="download-page__navigation">
        <div>
          HOME /
          <span className="download-page__navigation--active"> downloads</span>
        </div>
        <div>
          {lts ? 'LATEST LTS' : 'CURRENT'} VERSION {nodev}
        </div>
      </div>
      <div className="download-page__navigation">
        <div className="download-page__navigation--title">Downloads</div>
        <div className="download-page__navigation--npm">
          (includes npm {npmv})
        </div>
      </div>
    </>
  );
}


export const query = graphql`
query pageQueryAndPageQuery {
    page: markdownRemark(fields: { slug: { eq: "community-page" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

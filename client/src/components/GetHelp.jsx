import React from 'react';
import { Link } from 'react-router-dom';

const GetHelp = () => {
  const issues = [
    {
      category: 'Finance Issues',
      relatedIssues: [
        { title: 'Beti Bachao Beti Padhao (BBBP)', link: 'https://wcd.nic.in/bbbp-schemes' },
        { title: 'Sukanya Samriddhi Yojana (SSY)', link: 'https://www.india.gov.in/spotlight/sukanya-samriddhi-yojana-0' },
        { title: 'Pradhan Mantri Ujjwala Yojana (PMUY)', link: 'https://www.pmujjwalayojana.com/' },
      ],
    },
    {
      category: 'Health Issues',
      relatedIssues: [
        { title: 'Mahila Shakti Kendra (MSK)', link: 'https://wcd.nic.in/schemes/mahila-shakti-kendra-msk' },
        { title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)', link: 'https://www.education.gov.in/en/schemes/national-scheme-incentive-girls-secondary-education-nsigse' },
        { title: 'Women Helpline Scheme', link: 'https://wcd.nic.in/schemes/one-stop-centre-scheme-osc' },
      ],
    },
    {
      category: 'Family Issues',
      relatedIssues: [
        { title: 'Kasturba Gandhi Balika Vidyalaya (KGBV)', link: 'https://samagra.education.gov.in/kgbv.aspx' },
        { title: 'Maternity Benefit Program (Pradhan Mantri Matru Vandana Yojana)', link: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana' },
        { title: 'Support to Training and Employment Programme for Women (STEP)', link: 'https://wcd.nic.in/schemes/support-training-and-employment-programme-women-step' },
      ],
    },
    {
      category: 'Scholarships',
      relatedIssues: [
        { title: 'Scholarship 1', link: 'https://example.com/scholarship1' },
        { title: 'Scholarship 2', link: 'https://example.com/scholarship2' },
        { title: 'Scholarship 3', link: 'https://example.com/scholarship3' },
      ],
    },
  ];

  return (
    <div className="container mt-5" style={{ backgroundColor: 'white' }}>
      <div className="row justify-content-center" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          {issues.map((issue, index) => (
            <div className="card mb-3 mx-4" key={index} style={{ border: '1px solid #ddd' }}>
              <div className="card-header" style={{ backgroundColor: '#8c6a5d', color: '#fff' }}>
                <h2 className="mb-0">
                  {issue.category}
                </h2>
              </div>
              <div className="card-body" style={{ backgroundColor: '#f1f8e9' }}>
                <ul className="list-unstyled">
                  {issue.relatedIssues.map((relatedIssue, idx) => (
                    <li
                      key={idx}
                      style={{
                        border: '1px solid #ddd',
                        padding: '10px',
                        marginBottom: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                      }}
                    >
                      <a
                        href={relatedIssue.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'black', textDecoration: 'none' }}
                      >
                        {relatedIssue.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/help"><button className="btn btn-primary" style={{ marginTop: '20px' }}> Get Help from Us</button></Link>
    </div>
  );
};

export default GetHelp;

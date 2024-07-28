import React, { useState } from 'react';

const GetHelp = () => {
  const [activeKey, setActiveKey] = useState(null);

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

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: 'white' }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="accordion" id="accordionExample">
            {issues.map((issue, index) => (
              <div className="card mb-3" key={index} style={{ border: '1px solid #ddd' }}>
                <div className="card-header" id={`heading${index}`} style={{ backgroundColor: '#e3f2fd' }}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse${index}`}
                      aria-expanded={activeKey === index.toString()}
                      aria-controls={`collapse${index}`}
                      onClick={() => toggleActiveKey(index.toString())}
                      style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}
                    >
                      {issue.category}
                    </button>
                  </h2>
                </div>

                <div
                  id={`collapse${index}`}
                  className={`collapse ${activeKey === index.toString() ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-parent="#accordionExample"
                >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;



import React, { useState } from 'react';

function Assessment() {
  const [category, setCategory] = useState('');

  // Sample status data for each category
  const categories = [
    { name: 'DSA', status: 'Pending' },
    { name: 'Python', status: 'Active' },
    { name: 'Java', status: 'Live' },
    { name: 'JavaScript', status: 'Pending' },
    { name: 'C++', status: 'Active' },
    { name: 'React', status: 'Live' },
    // Add more categories as needed
  ];

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Select Quiz Category</h1>
        <div>
          {categories.map((categoryItem) => (
            <div
              key={categoryItem.name}
              style={{
                ...styles.categoryItem,
                backgroundColor: category === categoryItem.name ? '#f0f0f0' : 'white',
              }}
              onClick={() => handleCategorySelect(categoryItem.name)}
            >
              <span>{categoryItem.name}</span>
              <span style={{ fontWeight: 'bold', color: getStatusColor(categoryItem.status) }}>
                {categoryItem.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function to determine the color based on status
function getStatusColor(status) {
  switch (status) {
    case 'Pending':
      return 'orange';
    case 'Active':
      return 'green';
    case 'Live':
      return 'blue';
    default:
      return 'black';
  }
}

// Styles object for the component
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: '400px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  categoryItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Assessment;

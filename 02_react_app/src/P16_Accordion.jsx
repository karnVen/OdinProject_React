// src/Accordion.jsx
import React from 'react';

// A simple wrapper for the contents
const AccordionContents = ({ children }) => <div>{children}</div>;

class Accordion extends React.Component {
  state = { openIndex: 0 };

  setOpenIndex = (openIndex) => this.setState({ openIndex });

  render() {
    const { openIndex } = this.state;
    
    return (
      <div>
        {this.props.items.map((item, index) => (
          <React.Fragment key={index}>
            {/* The user clicks this button */}
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            
            {/* The content only shows if the index matches */}
            {index === openIndex ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Accordion;
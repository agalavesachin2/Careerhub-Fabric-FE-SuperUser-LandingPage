import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  FaqData: {
    faqs?: FAQItem[];
  };
}

const FAQSection: React.FC<FAQSectionProps> = ({ FaqData }) => {
  const faqs = FaqData?.faqs ?? [];

  const [openItems, setOpenItems] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggleItem = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  const expandAll = () => {
    setOpenItems(Array(faqs.length).fill(true));
  };

  const collapseAll = () => {
    setOpenItems(Array(faqs.length).fill(false));
  };

  return (
    <div id="faqs">
      <div className="faq-section">
        <div className="faq-header">
          <h2>Frequently asked questions</h2>
          <div className="faq-buttons">
            <button onClick={expandAll} style={{ marginRight: '10px' }}>
              Expand all
            </button>
            <div className='rectangle-35794'></div>
            <button onClick={collapseAll}>Collapse all</button>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openItems[index] ? 'open' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleItem(index)}
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              >
                {openItems[index] ? 
                  <ChevronUp className="faq-chevron" /> : 
                  <ChevronDown className="faq-chevron" />}
                <p style={{ marginLeft: '10px' }}>{faq.question}</p>
              </div>

              {openItems[index] && (
                <p
                  className="faq-answer"
                  style={{ margin: '2px 35px 11px' }}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

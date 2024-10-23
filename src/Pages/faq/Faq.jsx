import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../Components/Header';

const Faq = () => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const faqData = [
        {
            question: "How do I track my order?",
            answer: "Once your order is shipped, we will send you a tracking number via email. You can use that number to track your package.",
            panel: "panel2",
            type: "Shipping"
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on your location.",
            panel: "panel3",
            type: "Shipping"
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay.",
            panel: "panel4",
            type: "Payments"
        },
        {
            question: "How can I cancel or change my order?",
            answer: "You can cancel or change your order within 24 hours of purchase by contacting customer support.",
            panel: "panel5",
            type: "Orders"
        },
        {
            question: "Are the products covered by warranty?",
            answer: "Yes, all products are covered by a one-year manufacturer warranty for any defects.",
            panel: "panel6",
            type: "Warranty"
        },
        {
            question: "How long does it take to process a refund?",
            answer: "Refunds are processed within 5-7 business days once the returned item is received and inspected.",
            panel: "panel7",
            type: "Returns"
        },
        {
            question: "Can I purchase a gift card?",
            answer: "Yes, we offer gift cards in various denominations. You can purchase them on our website.",
            panel: "panel8",
            type: "Gift Cards"
        },
        {
            question: "How do I sign up for your newsletter?",
            answer: "You can sign up for our newsletter by entering your email at the bottom of our homepage.",
            panel: "panel9",
            type: "General"
        },
        {
            question: "Do you offer discounts for bulk purchases?",
            answer: "Yes, we offer discounts for bulk orders. Please contact us for more details.",
            panel: "panel10",
            type: "Discounts"
        }
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
                 <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
                <Accordion defaultExpanded onChange={handleChange("panel1")}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        What is your return policy?
                        </Typography>
                        <Typography sx={{ color: theme.palette.mode === "dark" ? theme.palette.info.dark : theme.palette.info.light }}>Returns</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        You can return any item within 30 days of purchase. The product must be in its original condition and packaging.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {faqData.map((item) => {
                    return (
                        <Accordion expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {item.question}
                                </Typography>
                                <Typography sx={{ color: theme.palette.mode === "dark" ? theme.palette.info.dark : theme.palette.info.light }}>{item.type}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}

            </Box>
        </Box>
    )
}

export default Faq

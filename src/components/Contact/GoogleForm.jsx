import React from 'react';

const GoogleForm = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
            padding: '16px',
        },
        formWrapper: {
            width: '100%',
            maxWidth: '1024px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        iframe: {
            width: '100%',
            height: '800px',
            border: 'none',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <iframe
                    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                    style={styles.iframe}
                    title="Google Form"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
};

export default GoogleForm;

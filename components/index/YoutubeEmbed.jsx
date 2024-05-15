import React from 'react';

const YoutubeEmbed = () => {
    const embedUrl = `https://youtu.be/-IpGYKPtPP4?si=jXNEDsRM6dSRuEJd`; // last code to be changed only not the whole URL
    return (
        <>
            <iframe
                className='size-full'
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
        </>
    )
}

export default YoutubeEmbed;
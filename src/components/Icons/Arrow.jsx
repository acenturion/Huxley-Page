function Instagram(props) {
    return (
        // <svg
        //     {...props}
        //     xmlns="http://www.w3.org/2000/svg">
        //     <path
        //         fill="currentColor"
        //         d="m4.518 14.737 9.117 9.115a1.252 1.252 0 0 1-1.77 1.77L.615 14.372a1.25 1.25 0 0 1 0-1.77l11.25-11.25a1.251 1.251 0 1 1 1.77 1.77l-9.117 9.115H27.75a1.25 1.25 0 0 1 0 2.5H4.518Z"/>
        // </svg>

        <svg xmlns="http://www.w3.org/2000/svg"
             {...props}
             fill={"currentColor"}
        >
            <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"/>
        </svg>
    );
}

export default Instagram;



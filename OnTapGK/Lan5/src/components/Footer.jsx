// import React from "react";

// function Footer() {
//     return (
//         <footer className="container mt-4">
//             <h5>Nguyễn Hữu Sang, DHKTPM18A, MSSV: 22669281</h5>
//         </footer>
//     );
// }

// export default Footer;


import React from "react";

const Footer = React.memo(() => {
    return (
        <footer className="container mt-4">
            <h5>Nguyễn Hữu Sang, DHKTPM18A, MSSV: 22669281</h5>
        </footer>
    );
});

export default Footer;
import React from 'react';
const Navbar = () => {
    return <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div id="ci-marketing-logo" className="logo-image"></div>
                {/*onMouseOver={this.src = this.src.replace('ciMarketing', 'ciMarketingHover')} 
                onMouseDown={this.src = this.src.replace('ciMarketingHover', 'ciMarketing')}/>*/}
            <div id="minister-of-culture-logo" className="logo-image"></div>
                {/*onMouseOver={this.src = this.src.replace('ministryOfCultureAndSport', 'ministryOfCultureAndSportHover')} 
                onMouseDown={this.src = this.src.replace('ministryOfCultureAndSportHover', 'ministryOfCultureAndSport')}/>*/}
            <h2 id="logout" style={{display: 'none'}}>
                יציאה
                <span  className="glyphicon glyphicon-off" ></span>
            </h2>
            <h1>
                <span style={{fontWeight: 400}}>סקר</span>
                <span style={{fontWeight: 700}}> סופרים</span>
            </h1>
            <h4>
                <b>טלפון: </b>03-9220099 שלוחה 117 | <b>פקס: </b>03-9220070 | <b>מייל: </b>ssofrim@gmail.com
            </h4>
        </div>
    </nav>;
}
export default Navbar;
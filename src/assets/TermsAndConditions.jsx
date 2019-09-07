import React, { Component } from "react";

import "./TermsConditions.css";

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="termsMain">
        <h1>Terms and Conditions ("Terms")</h1>
            <p>Last updated: September 07, 2019</p>
            <p>
                Please read these Terms and Conditions ("Terms", "Terms and
                Conditions") carefully before using the http://www.danburbach.com
                website (the "Service") operated by Daniel Burbach's Website ("us",
                "we", or "our").
            </p>

            <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply to
                all visitors, users and others who access or use the Service.
            </p>

            <p>
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may not
                access the Service. The Terms and Conditions agreement for Daniel
                Burbach's Website has been created with the help of{" "}
            <a href="https://www.termsfeed.com/">TermsFeed</a>.
            </p>

        <h2>Links To Other Web Sites</h2>

            <p>
                Our Service may contain links to third-party web sites or services
                that are not owned or controlled by Daniel Burbach's Website.
            </p>

            <p>
                Daniel Burbach's Website has no control over, and assumes no
                responsibility for, the content, privacy policies, or practices of any
                third party web sites or services. You further acknowledge and agree
                that Daniel Burbach's Website shall not be responsible or liable,
                directly or indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web sites
                or services.
            </p>

            <p>
                We strongly advise you to read the terms and conditions and privacy
                policies of any third-party web sites or services that you visit.
            </p>

            <h2>Governing Law</h2>

            <p>
                These Terms shall be governed and construed in accordance with the
                laws of Oregon, United States, without regard to its conflict of law
                provisions.
            </p>

            <p>
                Our failure to enforce any right or provision of these Terms will not
                be considered a waiver of those rights. If any provision of these
                Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect. These Terms
                constitute the entire agreement between us regarding our Service, and
                supersede and replace any prior agreements we might have between us
                regarding the Service.
            </p>

            <h2>Changes</h2>

            <p>
                We reserve the right, at our sole discretion, to modify or replace
                these Terms at any time. If a revision is material we will try to
                provide at least 30 days notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole
                discretion.
            </p>

            <p>
                By continuing to access or use our Service after those revisions
                become effective, you agree to be bound by the revised terms. If you
                do not agree to the new terms, please stop using the Service.
            </p>

            <h2>Contact Us</h2>

            <p>If you have any questions about these Terms, please contact us.</p>
      </div>
    );
  }
}
export default TermsAndConditions;
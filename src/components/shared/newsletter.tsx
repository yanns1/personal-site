import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// components
import StyledNewsletter from "../styled/StyledNewsletter";
import ConvertkitForm from "../styled/ConvertkitForm";
// svgs
// @ts-ignore
import { ReactComponent as NewsletterSvg } from "../../assets/newsletter.svg";

type Props = {};

const Newsletter: React.FC<Props> = ({ }) => {
  return (
    <StyledNewsletter>
      <div className="header">
        <NewsletterSvg
          width="2rem"
          fill="currentColor"
          title="Newsletter icon"
        />
        <h2>Newsletter</h2>
      </div>
      <p>Want to receive an email whenever I’ve written a new post ?</p>
      <p>Subscribe to the newsletter !</p>
      <p>No spam, unsubscribe at any time.</p>
      <form
        action="https://app.convertkit.com/forms/1538011/subscriptions"
        method="post"
        data-sv-form="1538011"
        data-uid="2a0d04ea05"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      >
        <input
          type="text"
          // keep this "name" because Convertkit uses it
          name="fields[first_name]"
          id="firstName"
          placeholder="First name"
          required
        />
        <input
          type="email"
          // keep this "name" because Convertkit uses it
          name="email_address"
          id="email"
          placeholder="Email"
          required
        />
        <div className="button-wrapper">

          <button type="submit">Subscribe</button>
        </div>
      </form>
    </StyledNewsletter>
  );
};

export default Newsletter;

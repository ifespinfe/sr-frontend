import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { e as useSeoMeta } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'consola/core';
import 'ipx';
import 'unhead';
import 'vue-router';
import 'lucide-vue-next';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "community-guidelines",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Community guidelines"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-[100px] container prose sm:prose-lg prose-invert mx-auto [&_li]:font-semibold" }, _attrs))}><h1>User Guidelines</h1><p> Welcome to Spin Request Global Limited We\u2019re excited to have you as part of our community. These guidelines are here to help ensure that everyone enjoys a positive experience on our platform. Please take a moment to read through them. </p><ol><li>Account Creation and Security</li></ol><p> Accurate Information: When creating an account, please provide accurate and complete information. This helps us keep the community safe and allows DJs to deliver the best possible service. </p><p> \xA0Keep Your Account Secure: Protect your account by using a strong password and not sharing it with others. If you believe your account has been compromised, please contact our support team immediately. </p><ol start="2"><li>Using the Service</li></ol><p> Search and Book DJs: Use the search feature to find DJs. You can browse profiles, read reviews, select the DJ, and make your request </p><p> Request Songs: You can use the app to request songs. Please ensure that your requests are appropriate and in line with the event&#39;s theme. </p><p> Payments: All payments should be made through our secure payment gateway, Paystack. Do not attempt to pay DJs outside the platform, as this violates our terms of service. </p><ol start="3"><li>Code of Conduct</li></ol><p> Respect Others: Treat everyone on the platform\u2014DJs, event attendees, and other users\u2014with respect. Harassment, discrimination, or any form of abusive behavior will not be tolerated. </p><p> Appropriate Content: Ensure that all content you upload or share (including song requests, hype, and messages) is appropriate and respectful. Offensive, explicit, or illegal content is strictly prohibited. </p><p> Fair Use: Use the platform fairly and honestly. Do not attempt to manipulate ratings, reviews, or other aspects of the platform. Fraudulent activity will lead to account suspension or termination. </p><ol start="4"><li>Interaction with DJs</li></ol><p> Clear Communication: When communicating with DJs, be clear about your expectations and event details. This will help ensure that the DJ can meet your needs effectively. </p><p> Timely Requests: Make sure to submit song requests and any other special requirements well in advance. Last-minute changes may not be possible. </p><p> Feedback and Reviews: After your event, we encourage you to leave honest feedback and reviews. This helps other users make informed decisions and helps DJs improve their services. </p><ol start="5"><li>Safety and Security</li></ol><p> Personal Information: Never share personal information such as your home address, phone number, or financial details in public areas of the platform. </p><p> Report Issues: If you encounter any issues with a DJ or other users, or if you notice suspicious activity on the platform, please report it to our support team immediately. </p><p> Compliance with Laws: All users must comply with local laws and regulations while using the platform. Illegal activities will be reported to the appropriate authorities. </p><ol start="6"><li>Consequences for Violations</li></ol><p> Warnings: Users who violate these guidelines may receive a warning from our support team. </p><p> Suspension: Repeated or severe violations may result in temporary suspension of your account. </p><p> Termination: In cases of serious misconduct or illegal activity, your account may be permanently terminated, and you may be banned from the platform. </p><ol start="7"><li>Updates to the Guidelines</li></ol><p> These guidelines may be updated periodically to reflect changes in our service or policies. We encourage you to review them regularly to stay informed. </p><ol start="8"><li>Contact Us</li></ol><p> If you have any questions or need support, please contact us at <a href="mailto:spinrequestsupp@gmail.com">spinrequestsupp@gmail.com</a></p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community-guidelines.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=community-guidelines-WdWkkE0Y.mjs.map

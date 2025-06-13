const config = {
  globals: {
    companyName: "iStreet Realty Group",
    mainCTAButtonText: "Get Your FREE Investment Property Analysis",
    primaryColor: "#e3c379",
    accentColor: "#d9c6a2",
    agents: [
      {
        name: "Rick Roccasalva",
        imageSrc: "https://images.unsplash.com/photo-1557862921-37829c790f19?fit=crop&w=100&q=80",
        contactDetails: [
          { type: "email", value: "rick@istreetrealty.ca" },
          { type: "phone", value: "(416) 410-2880" }
        ]
      }
    ]
  },

  header: {
    tag: "CASE STUDY",
    title: "How We Helped a Smart Investor Win Their Target Property Against 9 Other Offers—Creating Instant Cash Flow in Today's Tough Market",
    subheadline: "**WON AGAINST 9 OTHER OFFERS** and secured <strong>immediate cash flow</strong> with premium tenants at <a href=\"#\">top-dollar rent</a> in Woodbridge"
  },

  mainBox: {
    summary: {
      title: "How We Helped a Smart Investor Win Their Target Property Against 9 Other Offers—Creating Instant Cash Flow in Today's Tough Market",
      heroImage: { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80", alt: "Investment Property Woodbridge" },
      subTitle: "Summary",
      paragraphs: [
        "Meet my investor client—a savvy buyer who understood the power of real estate for building generational wealth. They had a specific vision: <strong>find a turn-key 2-unit rental property in Woodbridge's exclusive areas</strong> that would deliver immediate cash flow and long-term appreciation for their children's future.",
        "After months of frustration and losing out on 8 different properties, they realized they needed an agent who actually understood investment properties—not just residential sales. Through strategic positioning and bulletproof offer terms, we <strong>won against 9 other offers and secured immediate cash flow</strong> at $1,260,000 on a strategically under-listed $999,000 property."
      ]
    },
    sidebar: {
      image: { src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fit=crop&w=200&q=80", alt: "Rick Roccasalva at iStreet Realty Group" },
      paragraphs: [
        "At {{companyName}} we are built on integrity, insight, and innovation.<br><br>We combine decades of real estate expertise with cutting-edge technology to deliver unmatched support, transparency, and results for our clients.<br><br>With over 40 years of hands-on real estate experience and extensive corporate backgrounds, our managing partners provide a balanced and strategic approach to Residential, Commercial, and Investment properties.<br><br>We prioritize clear communication and use the latest market insights to guide every client toward success—whether buying, selling, or investing.<br><strong>At iStreet Realty Inc., we're more than real estate experts—we're your trusted partner in building your future.</strong>"
      ]
    }
  },

  sections: [
    {
      type: "standard",
      title: "The Challenge",
      listItems: [
        "Finding a cash-flowing investment property in today's market seemed nearly impossible—most deals barely broke even",
        "Every desirable property in Woodbridge attracted massive competition, with some getting 10+ offers",
        "They'd already viewed 8 different homes but kept losing out to other investors willing to overpay",
        "The uncertainty was crushing—they worried about making a $1.2M+ investment without knowing if quality tenants would materialize"
      ]
    },
    {
      type: "standard",
      title: "The Turning Point",
      paragraphs: [
        "After months of frustration, they realized they needed an agent who actually understood investment properties—not just residential sales. <strong>My hands-on experience with investment deals and proven track record of helping investors build wealth convinced them I was the missing piece to their success.</strong>"
      ]
    },
    {
      type: "standard",
      title: "Our Approach",
      listItems: [
        "We crafted bulletproof offers with strategic positioning: larger deposits, shorter closings, and fewer conditions that sellers couldn't refuse",
        "I leveraged my deep market knowledge to identify the property's true potential before other investors caught on",
        "My professional communication and negotiation expertise impressed even the listing agent—they'd never worked with someone at this level",
        "We moved fast when the right opportunity appeared, acting within hours while competitors hesitated",
        "I provided complete investment analysis, showing exactly how the property would perform financially"
      ],
      testimonial: { quote: "\"Your expertise and integrity made this whole experience fantastic! You checked all the boxes we were looking for and delivered results we didn't think were possible in this market. We're already looking forward to doing this again soon because you've shown us how to build real wealth through strategic real estate investing.\"<br><span>— Woodbridge Investor Client</span>" }
    },
    {
      type: "standard",
      title: "The Results",
      listItems: [
        "**WON AGAINST 9 OTHER OFFERS** in a fierce bidding war",
        "Secured immediate cash flow with premium tenants at top-dollar rent",
        "Gained instant equity position with property valued significantly above purchase price",
        "**PURCHASED FOR $1,260,000** on a strategically under-listed $999,000 property"
      ],
      paragraphs: [
        "<strong>Key Victory Stats:</strong><br>• **9 COMPETING OFFERS DEFEATED**<br>• **IMMEDIATE POSITIVE CASH FLOW ACHIEVED**<br>• **3-5 YEAR EQUITY GROWTH PROJECTED**"
      ],
      image: { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80", alt: "Secured investment property interior" }
    },
    {
      type: "standard",
      title: "Lessons for Buyers",
      listItems: [
        "In multiple offer situations, terms often matter more than price—the right strategy beats throwing more money at the problem",
        "Having an agent with actual investment experience is crucial—most agents don't understand cash flow analysis or rental market dynamics",
        "Speed and decisiveness win deals—hesitation costs you properties, especially in competitive markets like Woodbridge"
      ]
    },
    {
      type: "ctaBanner",
      ctaBannerContent: {
        subhead: "Trusted By Smart Investors Building Generational Wealth",
        headline: "Get Your FREE Investment Property Analysis",
        smallText: "Discover the 3 specific strategies that helped us win against 9 other offers while securing immediate cash flow—even in today's challenging market ➡️"
      }
    }
  ],

  footer: {
    logo: { src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fit=crop&w=200&q=80", alt: "{{companyName}} Logo" },
    brokerageLabel: "Brokerage:",
    brokerageName: "HomeLife Partners",
    brokerageAddress: "123 Main Street, Suite 456, Toronto, ON M1M 1M1",
    secondaryLogo: { src: "https://i.imgur.com/9GIzqTo.png", altTemplate: "Logo of {{brokerageName}}" },
    disclaimerText: "All testimonials on this page are from real clients. Their experiences do not guarantee similar results.<br>Individual results may vary based on location, market conditions, motivation, as well as other unforeseen factors. Your results may vary.",
    privacyPolicy: { text: "Privacy Policy", href: "#" }
  }
};
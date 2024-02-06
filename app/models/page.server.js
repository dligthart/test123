export async function getPages() {
    return [
        {
            slug: "hello-world",
            title: "Hello world!",
            content: "This is a hello to the world.",
        },
        {
            slug: "about-us",
            title: "About Us",
            content: "Welcome to our about us page. Learn more about our organization and mission.",
        },
        {
            slug: "services",
            title: "Our Services",
            content: "Explore the wide range of services we offer to meet your needs.",
        },
        {
            slug: "contact",
            title: "Contact Us",
            content: "Get in touch with us through our contact page. We'd love to hear from you!",
        },
        {
            slug: "products",
            title: "Our Products",
            content: "Discover our latest products and find the perfect solution for you.",
        },
        {
            slug: "blog",
            title: "Company Blog",
            content: "Read our latest blog posts for insights, updates, and industry news.",
        },
        {
            slug: "faqs",
            title: "Frequently Asked Questions",
            content: "Find answers to common questions in our FAQs section.",
        },
        {
            slug: "testimonials",
            title: "Customer Testimonials",
            content: "See what our customers are saying about their experiences with our products and services.",
        },
        {
            slug: "privacy-policy",
            title: "Privacy Policy",
            content: "Learn about our commitment to protecting your privacy with our privacy policy.",
        },
        {
            slug: "terms-and-conditions",
            title: "Terms and Conditions",
            content: "Review our terms and conditions to understand the rules and guidelines for using our services.",
        },
        // Add more pages as needed
    ];
}

// export async function getPages() {
//     return (await fetch('http://localhost:8888/pages')).json();
// }


export async function getPage(slug) {
    const pages = await getPages();
    const page = pages.find(page => page.slug === slug);

    if (page) {
        return page;
    } else {
        // Return an appropriate value if the page with the specified slug is not found
        return null; // You can also throw an error or handle it differently based on your requirements
    }
}
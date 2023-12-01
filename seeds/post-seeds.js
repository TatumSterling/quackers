const { Posts } = require('../models');




    // Sample post data
    const postData = [
      {
        title: 'Introduction to JavaScript',
        content: `
        JavaScript is a versatile and widely-used programming 
        language that plays a pivotal role in web development. Initially
        designed to enhance the interactivity of web pages, JavaScript 
        has evolved into a full-fledged, multi-paradigm language capable
        of running both on the client and server sides. It is an integral
        part of modern web browsers, enabling dynamic content updates, 
        user interface enhancements, and asynchronous communication. 
        With its lightweight syntax and broad ecosystem of libraries
        and frameworks, JavaScript has become a cornerstone for 
        building responsive and interactive web applications. 
        Its flexibility and ability to seamlessly integrate with 
        HTML and CSS make it an essential tool for developers creating 
        engaging and user-friendly digital experiences on the internet.`,
        user_id: 1, 
        category_id: 1,
      },
      {
        title: 'Getting Started with React',
        content: `
        Learning React as a beginner opens the door to 
        building dynamic and interactive user interfaces 
        for web applications. React is a JavaScript library 
        that simplifies the creation of UI components, making 
        it an excellent choice for those new to web development. 
        Start by grasping the fundamentals, such as JSX syntax, 
        which combines HTML with JavaScript, and the concept of 
        components—modular, reusable building blocks. Understand 
        the React component lifecycle and how to manage state and 
        props to create dynamic and responsive interfaces. As you 
        progress, explore React Router for navigation and integrate 
        with external data using AJAX or APIs. React's virtual DOM 
        optimizes performance by efficiently updating the UI, and 
        its thriving community provides an abundance of resources 
        and tutorials. By focusing on hands-on projects and 
        gradually expanding your knowledge, learning React becomes 
        an engaging journey for beginners to develop modern and 
        efficient web applications.`,
        user_id: 2,
        category_id: 1, 
      },
      {
        title: 'Node.js Best Practices',
        content: `
        Embracing Node.js best practices is crucial for building scalable, maintainable,
        and performant applications. Start by modularizing your code into small, focused
        modules and adhere to the single responsibility principle. Use the npm package
        manager to manage dependencies efficiently and keep your packages up-to-date.
        Implement asynchronous, non-blocking operations to maximize the event-driven
        nature of Node.js, ensuring optimal performance. Leverage middleware for robust
        request handling, and employ environment variables for configuration to enhance 
        flexibility across different deployment environments. Implement error handling
        with try-catch blocks and utilize logging to facilitate debugging. Regularly
        monitor and optimize your application's performance, and consider using tools
        like ESLint for code consistency. Finally, follow security best practices,
        including input validation, avoiding synchronous functions that can lead to
        denial-of-service attacks, and securing sensitive information with encryption.
        By incorporating these best practices, developers can build reliable and
        secure Node.js applications that scale with efficiency.`,
        user_id: 3,
        category_id: 1,
      },
      {
        title: 'Database Design Strategies',
        content: `
        Database design is the structured process of defining and organizing data to
        ensure efficient storage, retrieval, and management. It involves creating a 
        blueprint for the structure of a database, specifying tables, relationships,
        and constraints that govern how data is stored and interconnected.
        A well-designed database is crucial for maintaining data integrity and 
        optimizing performance. The process typically begins with identifying 
        the entities and relationships within a system, followed by the normalization
        of data to reduce redundancy and improve overall efficiency. Effective database
        design enhances data accuracy, facilitates data querying and reporting, and provides
        a solid foundation for scalable and maintainable systems. It is a critical
        aspect of software development, influencing the application's ability to handle
        and manipulate data effectively throughout its lifecycle`,
        user_id: 4, 
        category_id: 17,
      },
      {
        title: 'Tips for creating responsive web layouts',
        content: `
        Creating responsive web layouts involves adopting design
        principles that ensure a seamless and optimal user experience across 
        various devices and screen sizes. To achieve this, prioritize a mobile-first
        approach, designing the layout for smaller screens before scaling up. Utilize
        fluid grids and flexible layouts to ensure that elements proportionally adjust
        to different screen dimensions. Employ media queries to apply specific
        styles based on the device's characteristics, such as width, height, and
        resolution. Test your layout on multiple devices to ensure compatibility
        and make adjustments as needed. Prioritize content hierarchy and consider
        hiding or reorganizing less critical elements on smaller screens. Finally,
        leverage responsive images and optimize performance by loading appropriate
        resources based on the device's capabilities. By following these principles,
        you can create web layouts that adapt seamlessly to a diverse range of devices,
        offering a consistent and user-friendly experience.`,
        user_id: 5, 
        category_id: 17, 
      },

    ];

    // Insert sample posts into the database
    const seedPosts = async () => {
      try {
        await Posts.bulkCreate(postData);
        console.log('Posts seeded successfully.');
      } catch (error) {
        console.error('Error seeding posts:', error);
      }
    };


module.exports = seedPosts;
import React from 'react';
import PracticeOption from '../components/Prarticeoption';

const PracticePage = () => {
    const practiceOptions = [
        {
            title: 'Pratice Forms',
            description: 'See how the forms work.',
            imageUrl: 'https://example.com/option1.jpg',
            link: '/option1',
        },
        {
            title: 'Option 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option2.jpg',
            link: '/option2',
        },
        {
            title: 'Option 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option3.jpg',
            link: '/option3',
        },
        {
            title: 'Option 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option4.jpg',
            link: '/option4',
        },
        {
            title: 'Option 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option4.jpg',
            link: '/option4',
        },
        {
            title: 'Option 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option4.jpg',
            link: '/option4',
        },

    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center font-bold mb-4">Practice Projects</h1>
            <p className="text-lg text-gray-600 mb-8">
                Watching course and reading tutorials online will only get you so far. To become a great automation engineer, you’ll need a ton of practice. While most online courses provide the students with just the lectures and few course materials but to actually implement the newly acquired knowledge, they are left to scramble for themselves.

                Due to lack of this practice, students struggle to implement the new learnings at their work or struggle with answering interview questions. But at Rahul Shetty Academy, we want to have our students really implement their new knowledge and skills on our dedicated live practice apps which we have developed exclusively for our students.

                We have developed Live Practice apps for different verticals of QA automation like UI / Web, Mobile Apps and API services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {practiceOptions.map((option) => (
                    <PracticeOption key={option.title} {...option} />
                ))}
            </div>
        </div>
    );
};

export default PracticePage;

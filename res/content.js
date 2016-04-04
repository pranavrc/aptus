define([], function () {
    var content = {
        'courses': [
            {
                'id': 0,
                'name': 'Becoming a Gator!',
                'description': "This course is for international students joining the University of Florida this upcoming semester. UF hosts more than 6,000 international students who are seeking an education that is fully accredited and will be recognized all over the globe. As the state of Florida's largest and oldest university, the University of Florida is one the state's centers for education, medicine, cultural events and athletics. The university is located in Gainesville in North Central Florida, continually ranked as one of the best places to live in the United States. Subscribe to this course to get news, tips, and challenges to help you fit right in Gator-town!",
                'rating': 4.8,
                'reviews': [
                    {
                        'name': 'Dhruv',
                        'content': 'This course really helped me settle into life at Gainesville. I loved the tiered challenge structure which I felt was nicely balanced in terms of slowly scaling up the difficulty and making things more interesting!'
                    },
                    {
                        'name': 'Pooja',
                        'content': 'This course has some really great tips about life in the Swamp. I honestly wouldn’t have come to known of a lot of great things UF has to offer if not for this course! 5/5, a definite subscribe.'
                    },
                    {
                        'name': 'Zhang',
                        'content': 'I would definitely recommend this course to any international student joining UF. The challenges are fun and you get to meet a lot of great people along the way!'
                    }
                ]
            }
        ],
        'challenges': [
            {
                'id': 0,
                'name': 'Check in at UFIC',
                'completed': true,
                'description': 'The University of Florida International Center serves as the “front door” of the university for international students, visitors from around the world, and visiting scholars. Check into UFIC after you land at Gainesville, so we can help you settle in as soon as possible!',
                'tier': 1,
                'credits': 10,
                'courseid': 0
            },
            {
                'id': 1,
                'name': 'Get your Gator 1 Card',
                'completed': true,
                'description': 'The Gator 1 Card makes campus life easier. Students and staff use the Gator-1 Card for fare-free access to the RTS bus service; to use UF Library services; to access prepaid Vending, Gator Dining, and Bookstore accounts; and to obtain many other campus services. Get your Gator 1 card today!',
                'tier': 1,
                'credits': 10,
                'courseid': 0
            },
            {
                'id': 2,
                'name': 'Attend the International Student orientation',
                'completed': true,
                'description': 'The International Student Orientation can be an enriching experience that is designed to help you adjust to academic and social life at University of Florida, learn about on- and off-campus resources and support services, learn how to navigate the physical environment of the campus, become comfortable with the local community and U.S. culture, and meet new people and make friends from around the world.',
                'tier': 1,
                'credits': 10,
                'courseid': 0
            },
            {
                'id': 3,
                'name': 'Visit Ben Hill Griffin Stadium',
                'completed': true,
                'description': "Ben Hill Griffin Stadium at Florida Field, popularly known as The Swamp, is the football stadium for the University of Florida and the home field of the university's Florida Gators football team, and as a new gator, it is tradition to get down to the Swamp to take in the sights of one of the largest and historic stadiums in the country.",
                'tier': 1,
                'credits': 10,
                'courseid': 0
            }
        ],
        'user': {
            id: 0,
            name: 'Vikram Kumar',
            age: 22,
            location: 'Gainesville, Florida',
            occupation: 'Graduate Student at University of Florida',
            interests: ['music', 'travel', 'adventure', 'programming', 'writing']
        }
    };

    return content;
});

const initState = {
    title: 'About Me',
    header: ["What I'm doing", 'Testimonials', 'Clients'],
    testimonialsName: ['Jojo', 'Kzek', 'Jessica Chemistry'],
    testimonialsContent: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis."
    ],
    doingText: [
        {
            id: 1,
            iconName: 'fa-brands fa-figma',
            title: 'Web Design',
            text: '...@gmail.com'
        },
        {
            id: 2,
            iconName: 'fa-solid fa-laptop-code',
            title: 'Web development',
            text: 'Web...'
        },
        {
            id: 3,
            iconName: 'fa-solid fa-mobile-screen-button',
            title: 'Mobile Apps',
            text: 'app...'
        },
        {
            id: 4,
            iconName: 'fa-solid fa-camera',
            title: 'Photography',
            text: 'picture...'
        }
    ]
}
const AboutReducer = (state = initState, action) => {
    // console.log(action)
    switch (action.payload) {
        case 'en':
            return state
        case 'vi':
            return {
                ...state,
                title: 'Về Tôi',
                header: ["Những gì tôi đang làm", 'Nhận xét', 'Khách hàng'],
                testimonialsName: ['Jojo', 'Kzek', 'Jessica Chemistry'],
                testimonialsContent: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis."
                ],
                doingText: [
                    {
                        id: 1,
                        iconName: 'fa-brands fa-figma',
                        title: 'Thiết kế Web',
                        text: '...@gmail.com'
                    },
                    {
                        id: 2,
                        iconName: 'fa-solid fa-laptop-code',
                        title: 'Phát triển Web',
                        text: 'Web...'
                    },
                    {
                        id: 3,
                        iconName: 'fa-solid fa-mobile-screen-button',
                        title: 'Ứng dụng Di động',
                        text: 'app...'
                    },
                    {
                        id: 4,
                        iconName: 'fa-solid fa-camera',
                        title: 'Nhiếp ảnh',
                        text: 'hình ảnh...'
                    }
                ]
            }

        default:
            return state
    }
}
export default AboutReducer
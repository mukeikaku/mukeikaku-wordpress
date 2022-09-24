module.exports = {
    content: require('./tailwind.conf/content'),
    theme: {
        screens: require('./tailwind.conf/screens'),
        colors: require('./tailwind.conf/colors'),
        fontFamily: {
            base: "'Shippori Mincho', serif",
            bold: "'Josefin Sans', sans-serif",
        },
        spacing: require('./tailwind.conf/spacing'),
        // maxWidth: require('./tailwind.conf/spacing'),
        fontSize: require('./tailwind.conf/fontSize'),
        letterSpacing: require('./tailwind.conf/letterSpacing'),
        lineHeight: require('./tailwind.conf/lineHeight'),
        // keyframes: require('./tailwind.conf/keyframes'),
        // animation: require('./tailwind.conf/animations'),
        borderRadius: require('./tailwind.conf/borderRadius'),
        extend: {
            transitionProperty: {
                color: 'color',
            },
        },
    },
};

export default {
    host: process.env.HOST,
    port: process.env.PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    default: {
        from: 'Equipe GoBarber <noreply@gobarber.com>',
    },
};
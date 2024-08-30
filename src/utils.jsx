import moment from 'moment';

export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi..How can I help you?';
    else if (text.includes('date'|| 'today date'))
        return moment().format('MMMM Do YYYY');
    else if (text.includes('what is your name'))
        return ('my name is chatbot, am happy to help you !');
    else if (text.includes('year'))
        return moment().format('YYYY');
    else if (text.includes('month'))
        return moment().format('MMMM');
    else if (text.includes('time'))
        return moment().format('h:mm:ss a');
    else if (text.includes('today'))
        return moment().format('dddd');
    else if (text.includes('day'))
        return moment().format('dddd');
    else if (text.includes('yeah'))
        return 'Ask something..';
    else if (text.includes('yes'))
        return 'Ask something..';
    else if (text.includes('ok'))
        return ' If you want ask mean ask something..';
    else if (text.includes('how are you'))
        return 'I am just a bot, but thanks for asking! How about you?';
    else if (text.includes('joke'))
        return 'Why don’t scientists trust atoms? Because they make up everything!';
    else if (text.includes('age'))
        return 'Age is just a number, and for me, it’s always zero!';
    else if (text.includes('favorite color'))
        return 'I love all colors equally, but blue is quite calming!';
    else if (text.includes('weather'))
        return 'You can check the latest weather updates at https://www.weather.com.';
    else if (text.includes('google link'))
        return 'https://www.google.com';
    else if (text.includes('news'))
        return 'Stay updated with the latest news at https://www.bbc.com/news.';
    else if (text.includes('quote'))
        return 'Here’s an inspiring quote: "The only way to do great work is to love what you do." – Steve Jobs';
    else if (text.includes('motivation'))
        return 'You are capable of amazing things! Keep pushing forward!';
    else if (text.includes('learning platform ' || 'give some learning platform name'))
        return 'You can learn something new at https://www.coursera.org or https://www.udemy.com.';
    else if (text.includes('interest'))
        return 'Bank interest rate is 8.7';
    else if (text.includes('thank you')) 
        return 'Thanks for contacting me :) Have a nice day..' ;
    return "I can't get you. Can you rephrase the message?";
};
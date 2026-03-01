/**
 * Add memories here as you collect them from the party.
 * Each conversation is separate: list the party goer's name as the key
 * and an array of messages for that 1:1 thread only (birthday girl + that person).
 * Order within each array is the order messages appear in that chat.
 */
export type Message = {
  from: string;
  text: string;
};

export const BIRTHDAY_GIRL_USERNAME = "freakgurl987654321";

/**
 * One entry per person. Each person's array has only the messages in that conversation.
 * freakgurl987654321's messages here are shown only in that person's tab.
 */
export const conversations: Record<string, Message[]> = {
  "Wan": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "wkimhi", text: "Remember, when i sprayed you with the water gun during my piano practice, you were so mad at me 🤷" },
  ],
  "Sarah": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "Sarah..... i'm 30 😤" },
    { from: "livinformusic319", text: "How about you get your own clothes now - remember back when we were in high school and I was looking everywhere for a specific shirt to wear? And then I saw you at school WEARING THAT EXACT SHIRT???" },
    { from: "livinformusic319", text: "Ooh and remember when we lived together in Ann Arbor for a couple months and I fell asleep when I was supposed to pick you up from EMT school? And then just straight ran that red light? Whoops on both accounts." },
    { from: "livinformusic319", text: "Omg and when you were born and mom brought you home and I tried to piggyback carry you everywhere lol good thing I didn't have my old lady back problems yet"},
  ],
  "Ashley": [
    // { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "akim0611", text: "GORL. remember when we were getting ready for the Athen's homecoming game freshmen year and thought wed be so cool if we made our own red alert shirts and tie dyed socks?? 🫣🫣🫣" },
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg yes. the socks look liked it was stained with ketchup and mustard" },
    { from: "akim0611", text: "wait i just realized it wasn't even the homecoming game…it was the athens vs troy high game at athens 💀💀💀 why did i dress like a red hawk?? LOL " },
  ],
  "Colin": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "c0linIsAws0m", text: "Yo remember when you made me cry." },
    { from: "c0linIsAws0m", text: "https://c.tenor.com/aD8IychBhXIAAAAd/tenor.gif" },
  ],
  "Joseph": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "jchoi1229", text: "Yo thirty is wild, remember when those badass kids in the Villas would pull up to your home on their sick wheels and politely ask your mom if you can come out and play."},
    { from: "jchoi1229", text: "Or when I accidentally passed a basketball at your face in the Villas? If you don't… I was kidding it never happened… (but seriously… I'm still scarred by how bad I felt about it)"},
    { from: "jchoi1229", text: "And how long it took to get your drinks at that one bar in Nashville? The bartender kept stopping between each drink to heat up something on the stove? He appreciated you helping with the simple syrup." },
  ],
  "Chris": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "Chris..... i'm 30 😤" },
    { from: "krizda4", text: "Yo you're like old now. remember when we got hammered in owen basement and you wouldn't walk? we had to push you in a desk chair thru the hallway, it looked so sus… you screaming “WHEEEEEEEE!!” While we pushed you had me crying 😂" },
  ],
};

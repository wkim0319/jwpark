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
  "Wan (wkimhi)": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "Wan (wkimhi)", text: "Remember, when i sprayed you with the water gun during my piano practice, you were so mad at me 🤷" },
  ],
  "Ashley": [
    // { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "Ashley", text: "GORL. remember when we were getting ready for the Athen's homecoming game freshmen year and thought wed be so cool if we made our own red alert shirts and tie dyed socks?? 🫣🫣🫣" },
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg yes. the socks look liked it was stained with ketchup and mustard" },
    { from: "Ashley", text: "wait i just realized it wasn't even the homecoming game…it was the athens vs troy high game at athens 💀💀💀 why did i dress like a red hawk?? LOL " },
  ],
  "Colin": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "Colin", text: "Yo remember when you made me cry." },
  ],
  "Joseph": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "omg i'm 30 😤" },
    { from: "Jchoi1229", text: "Yo thirty is wild, remember when those badass kids in the Villas would pull up to your home on their sick wheels and politely ask your mom if you can come out and play."},
    { from: "Jchoi1229", text: "Or when I accidentally passed a basketball at your face in the Villas? If you don't… I was kidding it never happened… (but seriously… I'm still scarred by how bad I felt about it)"},
    { from: "Jchoi1229", text: "And how long it took to get your drinks at that one bar in Nashville? The bartender kept stopping between each drink to heat up something on the stove? He appreciated you helping with the simple syrup.”" },
  ],
  "Chris": [
    { from: BIRTHDAY_GIRL_USERNAME, text: "Chris..... i'm 30 😤" },
    { from: "Chris", text: "Yo you're like old now. remember when we got hammered in owen basement and you wouldn't walk? we had to push you in a desk chair thru the hallway, it looked so sus… you screaming “WHEEEEEEEE!!” While we pushed you had me crying 😂" },
  ],
};

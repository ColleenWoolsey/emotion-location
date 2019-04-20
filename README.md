FRONT END CAPSTONE - EMOLOCATION

https://vimeo.com/user97612572/review/331607051/f80ac4aef7

![Main Page](/src/EmoLocation.png?raw=true)
![Edit Page](/src/EditTask.png?raw=true)

FRONT END CAPSTONE - EMOLOCATION

Creativity with CRUD inspired by Geolocation

Modularization and dynamic routing mean DRY code that works harder. This browser-based single page application employs React, HTML, CSS, jQuery, JavaScript and Bootstrap. Seeing a project through from ERD to completion was as exciting as taking the training wheels off a bike.

Growth areas included: Flexibly balancing creativity and stretch goals with MVP and a firm deadline. Extensive project planning was done upfront with detailed issue tickets that allowed me to meet coding benchmarks.

I started with a grid for REACT routing akin to the LA freeway system and finished with something closer to the Chicago Dan Ryan Express - Thanks to google, perseverance, and the many folk willing to explain things “just one more time.”
Best part was the opportunity to develop something I feel passionate about and daring to hope it makes a difference.

Emo-Location is a TO-BE list Emotion Tracker for those who want to live truthfully and move responsibly. It incorporates specificity and timeframes to challenge the avoidance strategy of vagueness. Information and assessments relative to the 8 emotions encourage a better partnership between functionality and fully experiencing feelings.

## Using the App

To get started as a user, create a new account. When you reach the dashboard you can do one of SEVEN things:
1. Add an Emotion Task to your To-Be-List
2. Edit a Current Task
3. Mark a Task as Complete
4. Delete a task
5. Search for a previous Journal Entry
6. Add a Journal Entry
7. Explore Further Detail about each of the 8 emotions

![](https://vimeo.com/user97612572/review/331607051/f80ac4aef7)


## Getting Started
To run EmoLocation locally, create an empty directory and clone the project by running the following command in your terminal
```git@github.com:ColleenWoolsey/emotion-location.git```

EmoLocation uses a database.json file to store all data. To create the database, run:
```
mkdir api
cd api
touch database.json
```

Open database.json and copy the sample data below into the file to create a database skeleton and supply the neccessary data to populate the form options in the app. 

Navigate back to the root directory and run: ``` npm install ``` This will install all libraries and their dependencies used by EmoLocation. 

To run the app in development mode run ``` npm start ``` and open [http://localhost:3000]( http://localhost:3000) to view it in the browser. To start the server open another window of your terminal, navigate to api and run: ``` json-server -p 5002 -w database.json ```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

{
  "users": [
    {
      "id": 1,
      "userName": "Tom Smith",
      "email": "email@gmail.com",
      "password": "one"
    },
    {
      "id": 2,
      "userName": "Dick Smith",
      "email": "email@gmail.com",
      "password": "two"
    },
    {
      "userName": "Harry Smith",
      "password": "three",
      "id": 3
    }
  ],
  "emotions": [
    {
      "id": 1,
      "emotionName": "HURT",
      "imageUrl": "./HurtIcon.png",
      "giftTitle": "THE GIFT OF HURT",
      "gift": "Healing through relationship and having the courage to risk",
      "impairment": "Resentment",
      "summary": "FEELING HURT IS THE FIRST STEP TOWARD HEALING - Hurt lets us know that we have pain. It’s the thread that runs through all feelings. It’s an opportunity to admit, accept, and surrender to the truth of our neediness. Hurt points to our need for help from those who have genuine regard and love for us. All healing comes thru relationship - Defensiveness denies and minimizes the pain - When we refuse to feel the pain in our hearts we HARM others - To admit hurt is to begin to hope for a solution not just relief."
    },
    {
      "id": 2,
      "emotionName": "LONELY",
      "imageUrl": "",
      "giftTitle": "THE GIFT OF LONELINESS",
      "gift": "Loneliness speaks to our deep hunger to belong, be known, and loved. Causes us to seek intimacy",
      "impairment": "Apathy",
      "summary": "FEELING LONELY IS THE FIRST STEP TOWATD INTIMACY - Loneliness speaks to our deep hunger to belong and be known, received and loved. It’s a gift that causes us to seek out relationship where we can be expectant. We are lonely when we have both a desire to live in hope, and a willingness to hear, “no”. APATHY is the opposite of love -It denies our loneliness. Apathy makes us inhuman - it neither loves nor hates - It does not care."
    },
    {
      "id": 3,
      "emotionName": "SAD",
      "imageUrl": "./SadIcon.png",
      "giftTitle": "THE GIFT OF SADNESS",
      "gift": "Acceptance and serenity about what we can't control",
      "impairment": "Self-Pity & Hopeless Resignation",
      "summary": "FEELING SAD IS THE FIRST STEP TOWARD HEALING FROM LOSS - Sadness speaks to how much we VALUE what is missed, what’s gone, what’s lost. It also speaks of how much we value what we love, what we have and what we live. The more we live an open hearted life of fullness, the more we lose! Sadness gives us the gift of valuing and honoring life. If we don’t acknowledge our sadness, the grief deepens and stays. SELF-PITY is a way to avoid genuine sadness. It sounds like - Nothing ever goes right for me - I’m always the one who has to sacrifice - It’s no big deal - Self-pity is a strategy to manipulate others to feel sadness for us. RESIGNATION is rooted in hopelessness. It’s a feigned acceptance of painful unresolved issues which helps us avoid dependency, neediness and vulnerability. It sounds like - Don’t cry over spilt milk - It’s water under the bridge. When we can’t ache within for what was lost we have resigned ourselves to an existence that never lets life affect us!"
    },
    {
      "id": 4,
      "emotionName": "ANGER",
      "imageUrl": "",
      "giftTitle": "THE GIFT OF ANGER ",
      "gift": "Passion that moves us to express the substance and commitments of our heart",
      "impairment": "Pride & Depression",
      "summary": "FEELING ANGRY IS THE FIRST STEP TOWARD AUTHENTIC LIVING - It shows our yearning and hunger for life. It exposes the substance, desires and commitments of our hearts. Angry people can be known because of their unwillingness to hide. It’s a caring feeling saying something matters - The energy of compassion is rooted in anger - the desire to make the pain we see and feel come to an end. It alerts us to look inside to see what fear or hurt we are experiencing. Anger exposes what we value and expresses our willingness to do what is required to reach that value … even die for what we believe in. ANGER MOVES US TO ACTION!"
    },
    {
      "id": 5,
      "emotionName": "FEAR",
      "imageUrl": "",
      "giftTitle": "THE GIFT OF FEAR",
      "gift": "Wisdom & Faith come from seeking truth instead of safety",
      "impairment": "Anxiety, Judgement & Blindness",
      "summary": "FEELING FEAR IS THE FIRST STEP TOWARD WISDOM AND SERENITY - FEAR MAKES US AWARE OF OUR CHOICES. Fear brings us STRENGTH. It allows us to experience RISK (or run from it). We risk our hearts by expressing our needs. We risk TRUSTING others for assistance (or not). We choose to DEPEND on others for their skill and willingness. We enjoy opportunities to COLLABORATE with others for mutual gain (or we become fretful and controlling). We gain WISDOM through the deeply experienced awareness of spiritual truth that starts with listening to fear."
    },
    {
      "id": 6,
      "emotionName": "SHAME",
      "imageUrl": "",
      "giftTitle": "THE GIFT OF SHAME",
      "gift": "Humility - Potential to fail and do harm, to succeed and to love",
      "impairment": "Toxic Shame & Contempt",
      "summary": "FEELING SHAME IS THE FIRST STEP TOWARD HUMILITY - It's a consciousness of our limitations and giftedness that allows empathy for others. It allows us to stop comparison and competition in order to prove our worth, and start giving ourselves to something greater - the service of others - In humility we are grateful and merciful. Shame acknowledges we are feeling creatures who succeed and fail, need daily, are full of dreams and capabilities, desire great things but are deficient without others. It longs to know our value (that we belong) and that we add life (that we matter)."
    },
    {
      "id": 7,
      "emotionName": "GUILT",
      "imageUrl": "./guilt.jpg",
      "giftTitle": "THE GIFT OF GUILT",
      "gift": "Freedom & Forgiveness - Desire and vulnerability for change",
      "impairment": "Toxic Shame & Shamelessness",
      "summary": "FEELING GUILT IS THE FIRST STEP TOWARD FREEDOM - Guilt prompts us to seek the forgiveness that sets us free. Through guilt the heart confronts behavior and behavior reveals the state of our hearts. Guilt is our most precious gift because the relinquishing of the heart to another has transforming power. We discover love comes through truth not merit."
    },
    {
      "id": 8,
      "emotionName": "GLAD",
      "imageUrl": "",
      "giftTitle": "THE GIFT OF GLADNESS",
      "gift": "Joy with sadness that comes to those who hope",
      "impairment": "Pleasure without heart",
      "summary": ""
    }
  ],
  "tasks": [
    {
      "id": 4,
      "userId": 1,
      "emotionId": 3,
      "dueDate": "2019-02-17",
      "task": "Send the wonderful vet tech Allison a thank-you note for her kindness to Sassie and I",
      "complete": true
    },
    {
      "id": 6,
      "userId": 1,
      "emotionId": 5,
      "dueDate": "2019-02-28",
      "task": "Seek truth not safety",
      "complete": false
    },
    {
      "id": 8,
      "userId": 3,
      "emotionId": 4,
      "dueDate": "2019-02-21",
      "task": "Forsake manipulating  others",
      "complete": false
    },
    {
      "id": 9,
      "userId": 3,
      "emotionId": 4,
      "dueDate": "2019-02-24",
      "task": "Do courageous acts",
      "complete": false
    },
    {
      "userId": 3,
      "emotionId": 4,
      "dueDate": "2019-02-26",
      "task": "Speak truth with love and respect",
      "complete": false,
      "id": 10
    },
    {
      "userId": 3,
      "emotionId": 4,
      "dueDate": "2019-02-27",
      "task": "Affirm the capabilities of others",
      "complete": false,
      "id": 11
    },
    {
      "id": 12,
      "userId": 3,
      "emotionId": 4,
      "dueDate": "2019-02-25",
      "task": "Declare my intentions",
      "complete": false
    },
    {
      "id": 14,
      "userId": 2,
      "emotionId": 5,
      "dueDate": "2019-03-28",
      "task": "Hug my children & hold their hand in the dark",
      "complete": false
    },
    {
      "id": 16,
      "userId": 2,
      "emotionId": 5,
      "dueDate": "2019-03-18",
      "task": "Tell my mother of the hurt",
      "complete": false
    },
    {
      "id": 17,
      "userId": 2,
      "emotionId": 5,
      "dueDate": "2019-03-04",
      "task": "Tell God I need more",
      "complete": false
    },
    {
      "id": 18,
      "userId": 2,
      "emotionId": 5,
      "dueDate": "2019-03-31",
      "task": "Tell my spouse I was wrong",
      "complete": false
    },
    {
      "userId": 2,
      "emotionId": 5,
      "dueDate": "2019-03-07",
      "task": "Admit my lack of sufficiency and inability to control circumstances",
      "complete": false,
      "id": 19
    },
    {
      "userId": 2,
      "emotionId": 6,
      "dueDate": "2019-02-27",
      "task": "x",
      "complete": true,
      "id": 23
    },
    {
      "id": 24,
      "userId": 1,
      "emotionId": 3,
      "dueDate": "2019-02-19",
      "task": "Value openly by having deep sadness",
      "complete": true
    },
    {
      "id": 26,
      "userId": 2,
      "emotionId": 2,
      "dueDate": "2019-02-18",
      "task": "xxxxxx",
      "complete": true
    },
    {
      "userId": 2,
      "emotionId": 2,
      "dueDate": "2019-02-07",
      "task": "vvvv",
      "complete": true,
      "id": 28
    },
    {
      "userId": 1,
      "emotionId": 2,
      "dueDate": "2019-02-28",
      "task": "Stop pretending to enjoy what I don't like",
      "complete": false,
      "id": 30
    },
    {
      "userId": 1,
      "emotionId": 4,
      "dueDate": "2019-02-28",
      "task": "Admit fault and build bridges",
      "complete": false,
      "id": 31
    },
    {
      "userId": 1,
      "emotionId": 6,
      "dueDate": "2019-02-28",
      "task": "Stop comparing and competing",
      "complete": false,
      "id": 32
    },
    {
      "userId": 1,
      "emotionId": 8,
      "dueDate": "2019-02-28",
      "task": "Risk loss and enjoy success",
      "complete": false,
      "id": 33
    },
    {
      "id": 34,
      "userId": 1,
      "emotionId": 1,
      "dueDate": "2019-02-28",
      "task": "Acknowledge my inability to heal alone",
      "complete": false
    }
  ],
  "examples": [
    {
      "id": 1,
      "emotionId": 1,
      "example": "1. Start hurting"
    },
    {
      "id": 2,
      "emotionId": 1,
      "example": "2. Stop Resenting"
    },
    {
      "id": 3,
      "emotionId": 1,
      "example": "3. Take ownership of hurting others"
    },
    {
      "id": 4,
      "emotionId": 1,
      "example": "4. Acknowledge my inability to heal alone"
    },
    {
      "id": 5,
      "emotionId": 1,
      "example": "5. Reach out for care, assurance, and help from those not in denial"
    },
    {
      "id": 6,
      "emotionId": 2,
      "example": "1. Relinquish power"
    },
    {
      "id": 7,
      "emotionId": 2,
      "example": "2. Stop demanding"
    },
    {
      "id": 8,
      "emotionId": 2,
      "example": "3. Stop blaming"
    },
    {
      "id": 9,
      "emotionId": 2,
      "example": "4. Stop pretending to enjoy what I don't like"
    },
    {
      "id": 10,
      "emotionId": 2,
      "example": "5. Make time for a friend"
    },
    {
      "id": 11,
      "emotionId": 2,
      "example": "6. Sow wonder, celebration and passion"
    },
    {
      "id": 12,
      "emotionId": 3,
      "example": "1. Value openly"
    },
    {
      "id": 13,
      "emotionId": 3,
      "example": "2. Honor others"
    },
    {
      "id": 14,
      "emotionId": 3,
      "example": "3. Celebrate milestones"
    },
    {
      "id": 16,
      "emotionId": 3,
      "example": "4. Visit old friends"
    },
    {
      "id": 17,
      "emotionId": 3,
      "example": "5. Watch the sunrise"
    },
    {
      "id": 18,
      "emotionId": 3,
      "example": "6. Grieve when dreams don't come true"
    },
    {
      "id": 19,
      "emotionId": 4,
      "example": "1. Forsake manipulation"
    },
    {
      "id": 21,
      "emotionId": 4,
      "example": "2. Admit fault"
    },
    {
      "id": 22,
      "emotionId": 4,
      "example": "3. Build bridges"
    },
    {
      "id": 23,
      "emotionId": 4,
      "example": "4. Admit the failure of self-sufficiency"
    },
    {
      "id": 24,
      "emotionId": 4,
      "example": "5. Empathize - meet others in ther pain"
    },
    {
      "id": 25,
      "emotionId": 5,
      "example": "1. Seek truth not safety"
    },
    {
      "id": 26,
      "emotionId": 5,
      "example": "2. Acknowledge fear of failure and needs not being met"
    },
    {
      "id": 27,
      "emotionId": 5,
      "example": "3. Claim full responsiblity for my choices"
    },
    {
      "id": 28,
      "emotionId": 5,
      "example": "4. Evaluate situation and count costs"
    },
    {
      "id": 29,
      "emotionId": 5,
      "example": "5. Choose to risk"
    },
    {
      "id": 30,
      "emotionId": 5,
      "example": "6. Hold a child's hand in the dark"
    },
    {
      "id": 31,
      "emotionId": 6,
      "example": "1. Recognize my potential to fail and do harm"
    },
    {
      "id": 32,
      "emotionId": 6,
      "example": "2. Recognize my potential to succeed and to love"
    },
    {
      "id": 33,
      "emotionId": 6,
      "example": "3. Stop comparison and competition"
    },
    {
      "id": 34,
      "emotionId": 6,
      "example": "4. Be humble"
    },
    {
      "id": 35,
      "emotionId": 6,
      "example": "5. Lay down perfection for progress"
    },
    {
      "id": 36,
      "emotionId": 7,
      "example": "1. Look into another's eyes and see the hurt"
    },
    {
      "id": 37,
      "emotionId": 7,
      "example": "2. Acknowledge the need for change"
    },
    {
      "id": 38,
      "emotionId": 7,
      "example": "3. Be fully truthful and exposed"
    },
    {
      "id": 39,
      "emotionId": 7,
      "example": "4. Abandon justification and judging"
    },
    {
      "id": 40,
      "emotionId": 7,
      "example": "5. Ask for forgiveness"
    },
    {
      "id": 41,
      "emotionId": 7,
      "example": "6. Receive love through truth not merit"
    },
    {
      "id": 42,
      "emotionId": 8,
      "example": "1. FEEL ALL MY FEELINGS"
    },
    {
      "id": 43,
      "emotionId": 8,
      "example": "2. Tell the truth"
    },
    {
      "id": 44,
      "emotionId": 8,
      "example": "3. Give it to God"
    },
    {
      "id": 45,
      "emotionId": 8,
      "example": "4. Follow life's call"
    },
    {
      "id": 47,
      "emotionId": 8,
      "example": "5. Acknowledge that I matter and steward my gifts"
    },
    {
      "id": 48,
      "emotionId": 8,
      "example": "6. Recognize what I value"
    },
    {
      "id": 49,
      "emotionId": 8,
      "example": "7. Risk loss and enjoy success"
    },
    {
      "id": 51,
      "emotionId": 1,
      "example": "6. Move toward a solution and not just relief"
    },
    {
      "id": 52,
      "emotionId": 2,
      "example": "7. Forsake apathy"
    },
    {
      "id": 53,
      "emotionId": 2,
      "example": "8. Acknowledge my need for love"
    },
    {
      "id": 54,
      "emotionId": 3,
      "example": "7. Accept what I can't control and hope that good will come"
    },
    {
      "id": 55,
      "emotionId": 4,
      "example": "6. Speak truth with love and respect - Express my heart's desires"
    },
    {
      "id": 56,
      "emotionId": 4,
      "example": "7. Make promises and commitments"
    },
    {
      "id": 57,
      "emotionId": 6,
      "example": "6. Generously offer mercy and forgiveness"
    },
    {
      "id": 58,
      "emotionId": 8,
      "example": "8. HOPE"
    }
  ],
  "articles": [
    {
      "userId": 1,
      "entryDate": "Mon Feb 18 2019 22:06:02 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross Says ... You don't have to tell them you did this with a paper towel. We don't know where that goes. Hit it, and get away from it. Look at your painting and make a decision. Drop in a happy little sky here. If you learn to make one tree, you can make a million trees.\n\nThere's some little stringy ones that live down here. Bravery test! Truly the joy of painting is the friends that you make doing it. Don't be afraid to go out on a limb once in a while. Let's get crazy. You didn't know you had so much power, did you?",
      "id": 1
    },
    {
      "userId": 1,
      "entryDate": "Mon Feb 18 2019 22:06:57 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross Says ... We'll put a few little nicety things in there. Everybody likes mountains. I used to work for weeks to make a tree. Chickens need a place to live too. All you're worried about is this nice outside shape. Gentle, swirling motions here.\n\nIf you over-mix it, you just get one dead color. You have to make these big decisions in your world. Sort of an orangy-yellowish color. This is such a super day! Just let it float. This is one that you can do.",
      "id": 2
    },
    {
      "userId": 1,
      "entryDate": "Mon Feb 18 2019 22:07:31 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross says ... Let's build us a little cloud. Sometimes it's fun to play little games in your mountains. Let's do another one -- what the heck! Just sorta work it around and around here. Everything should get lighter toward the horizon. So many things you can create.\n\nLet's have some big, fluffy clouds in this painting. This is where you take out all your frustrations and all your hostilities, and just have a good time. Enough of that. Just let your imagination take you to anywhere you want to be. Just decide basically where you wanna start, and off you go! Show it who's boss!",
      "id": 3
    },
    {
      "userId": 1,
      "entryDate": "Mon Feb 18 2019 22:09:34 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross says ... Don't over do it -- be careful. Be careful. Always start with a clean brush in a light area and work outward. We planned this son-of-a-gun right from the beginning. People are so excited when they see this happen. Everybody will see nature through different eyes.",
      "id": 4
    },
    {
      "userId": 2,
      "entryDate": "Mon Feb 18 2019 23:05:41 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross says ... Brush mix! It's too far away. Let's build us a mountain! Don't let this get too strong or it'll stand out. I wanna be careful to not let the color go past the tape. All kinds of beautiful little things just happen.",
      "id": 6
    },
    {
      "userId": 2,
      "entryDate": "Fri Feb 22 2019 16:06:09 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross says ... Begin laying in just some beautiful little highlights. We'll just sort of see what happens. The round brush is so fun, let's go back to that. Just make little X's, and we'll put in a happy little sky. Always keep the brush moving. If there's a secret to anything, it's practice. It's easy to add more color, but it's a son of a gun to take it away. Absolutely no limits! You know me, I get crazy. Follow these angles.",
      "id": 7
    },
    {
      "userId": 1,
      "entryDate": "Fri Feb 22 2019 16:07:33 GMT-0600 (Central Standard Time)",
      "entry": "Bob Ross says ... Begin laying in just some beautiful little highlights. We'll just sort of see what happens. The round brush is so fun, let's go back to that. Just make little X's, and we'll put in a happy little sky. Always keep the brush moving. If there's a secret to anything, it's practice. It's easy to add more color, but it's a son of a gun to take it away. Absolutely no limits! You know me, I get crazy. Follow these angles.",
      "id": 8
    }
  ]
}
 



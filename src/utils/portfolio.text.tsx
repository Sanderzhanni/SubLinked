import React from 'react';

export const text = {
  introduction:
    <>
      <p>
        The topic of our LIFE Project is Visualizing Social Networks.<br/>
        Data visualization is the graphical representation of information. By using visual elements like charts, graphs,
        and maps, it provides an accessible way to see and understand trends, outliers, and patterns in the data. Even
        extensive amounts of complicated data start to make sense when presented graphically.<br/>
        Our team decided to focus on Reddit, a social network platform that allows users to post original content and
        exchange comments. Reddit provides a possibility to create all sorts of different communities, making it easy to
        analyse them. In this project we are analyzing some of the game development communities present on Reddit. These
        communities range from very general ones, like devblogs where people can post updates on their progress, to
        specific to a certain genre or engine, like RPGMaker.<br/>
        The goal of this project is to analyse several game development subreddits and find the most frequent posters
        during the period of one month (September 3 - October 4). Then, to compare the most frequent posters from
        different subreddits and see if any of the contributors have been active in several communities. This will allow
        us to see links between different subreddits (and interests) represented by players interacting and being active
        in the subreddits. This project will help to gain insight in how users interact with the platform; how different
        game communities are connected with each other through contributors and how strong is the bond between the
        communities.<br/>
        We decided that every member of our team will pick out a subreddit to analyze. The topic of the subreddit has to
        be connected with game development, but the ability to choose can help everyone be more interested in the topic,
        since we come from different backgrounds and study programs.<br/>
        All the members will share the beginning tasks (collecting and extracting data) to familiarize themselves with
        the
        process of visualization. Further division of roles is such:<br/>
        <br/>
        Team leader - Iryna Selina<br/>
        Programming - Sander Hanni<br/>
        Researcher - Marianne Aruste<br/>
        Data Visualizer - Ibitoye Olamilekan Hammed<br/>
        Presentation material - Rohid Safi<br/>
      </p>
    </>,
  importance:
    <>
      <p>
        Analyzing Reddit subreddits and users to determine the most active users, trending topics, or to see the
        connection between subreddits via users is not new. There are tools and services available that aid in data
        collection, which shows us previous interest in the research.<br/>
        The method used to collect the data is called Data scraping - a computer program that extracts data from another
        program and presents it in readable format. There are various tutorials written on how to use it, because it is
        the most common and most useful method for this kind of research. One of such articles describing the process
        (Tanner, G. (2019, February 12). Scraping Reddit data.<br/>
        https://towardsdatascience.com/scraping-reddit-data-1c0af3040768) was used by us to create a tool to aid us in
        collecting data (Repl.it. KlutzyLegalBlogclient. https://repl.it/@SanderHanni/KlutzyLegalBlogclient).<br/>
        A familiar service to one that was born during our project is created by Anvaka and can be found here:
        https://anvaka.github.io/sayit/. This service shows the relationship between subreddits based on metric "users
        who posted to this subreddit also post to...". However, it does not specify the period of time, nor does it show
        the usernames of the posters.<br/>
        <br/>
        The internet is a rapidly changing environment, meaning that the research has to be conducted frequently in
        order to have the recent results. With that in mind, we can say that this problem is relevant. On top of that,
        the analysis of Reddit subreddits has been done, but not necessarily in the field of game development. The
        findings of this project show us the field of interest of users and the relations between the interests. For
        example, if the person is interested in sharing their progress in r/devblogs, would they be interested in
        posting their progress in r/IndieDev, that has a wider variety of content? This information provides information
        about the audience, it can help in user research for a service, planning the marketing strategy for an indie
        developer, etc.
      </p>
    </>,
  stakeholders:
    <>
      <p>
        The stakeholders of this project are Reddit users, who contribute to subreddits connected to game development.
        They have contributed with input - the posts they’ve created on the subreddits.<br/>
        The field impacted by this project is game development and other fields connected to game development, such as
        game advertisement, game graphics, game sounds, etc.
        The institution impacted by this project is Reddit, whose users we are studying.

      </p>
    </>,
  resultsSummary:
    <>
      <p>
        Before the work had even begun towards finding the results of our project we did have a prejudice of what the
        final outcome was going to look like. However throughout the project the results we received were sort of
        surprising to us. To achieve a desirable result we had to reevaluate the variables (subreddits) we were going to
        choose in order to end up with a more precise and practical end result.
        From the chosen subreddits we were able to conclude the most active users across all analyzed subreddits and
        visualize the connections between the users and subreddits. Our goal was to find out the most frequent users
        during a one month period and analyze how they connect the different game development subreddits. We were able
        to answer both previous questions.<br/>
        <br/>
        The first task we started with was finding out the most frequent users during a one month period. All users are
        represented as nodes connected via edges. Two different users are connected to each other if they both appear
        under the same post(via comments or by one of them being the author of the post). On the graph(Graph 1) we can
        see the visualization of the users. The larger the label (username) the more connections it shares with other
        users. All of the users have been active during the 1 month analyzed.
      </p>
    </>,
  resultsSummary2:
    <>
      <p>
        To analyze how the most frequent users are connected to different game development subreddits we had to create a
        special network called affiliation network. It consists of the same users we had in the previous network but
        this time central hubs(subreddits) have been added. Instead of users being connected to each other directly they
        are now connected through the hubs they belong to.<br/>
        <br/>
        Since posts are derived from the subreddits themselves this lets us create a more shallow social affiliation
        network, which lets us analyze the connections between two different types of nodes, users and subreddits. Here
        (Graph 2) we can now clearly see the chosen subreddits and how they correlate with each other. Two different
        subreddits are considered connected if the same user has been active in both of them. The more active users
        shared between two subreddits the stronger the connection. The label size is proportional to the number of
        connections they have.
      </p>
    </>,
  resultsSummary3:
    <>
      <p>
        One user can be connected to a minimum of only 1 subreddit and a maximum of all the subreddits. Each color
        represents a different subreddit. Here (Graph 3) we can see how 5 different subreddits are connected to each
        other via only 1 user.
      </p>
    </>,
  resultsSummary4:
    <>
      <p>
        With these results we can determine how strongly the different subreddits are connected and what users connect
        them. This information allows game developers to easily find out what people are active in a specific game genre
        and to what degree different genres communicate to each other. This allows for a better game development
        planning and networking between game developers.
      </p>
    </>,
  socialMediaChannel:
    <>
      <p>
        For communications throughout the project we used <b>Discord, google meet and university provided emails</b> .
        In
        Discord we had our own private server in which we could discuss the ongoing process, distribute the tasks and
        share any information with each of our team members easily and reliably.
      </p>
    </>,
  website:
    <>
      <p>
        To communicate the idea and the outcome of our projects to other people who may be interested in our topic and
        results we had to build a website. Our website hosts a tool we built ourselves to convey the visualization part
        of our project.<br/>
        <br/>
        The tool provides its users a way to find out the connections between their own chosen subreddits (which expand
        outside our boundaries and limitations set upon our research) and visualize them, although on a smaller scale.
        The tool has also helped us visualize what the general outcome of our project is going to look like and helped
        us choose our own subreddits to analyze and research accordingly, thus it is also possible to view our compacted
        project result on the website.<br/>
      </p>
    </>,
}

export const table = [
  {
    desc: 'Look into similar previous researches',
    date: '30/09/2020',
    stakeholders: 'Marianne Aruste, Rohidi Safi',
    responsible: 'Rohid Safi - Open Society Technologies'
  },
  {
    desc: 'Pick out one subreddit each to analyse',
    date: '30/09/2020',
    stakeholders: 'Everyone',
    responsible: 'Iryna Selina - DTI / Digital Learning Games'
  },
  {
    desc: 'Prepare data scraping tool',
    date: '02/10/2020',
    stakeholders: 'Sander Hanni',
    responsible: 'Sander Hanni - DTI / Computer Science'
  },
  {
    desc: 'Scrape subreddit and get .csv files',
    date: '04/10/2020',
    stakeholders: 'Everyone',
    responsible: 'Sander Hanni - DTI / Computer Science'
  },
  {
    desc: 'Calculate average of users online for subreddits',
    date: '04/10/2020',
    stakeholders: 'Everyone',
    responsible: 'Iryna Selina - DTI / Digital Learning Games'
  },
  {
    desc: 'Familiarize with related literature',
    date: '05/10/2020',
    stakeholders: 'Marianne Aruste',
    responsible: 'Marianne Aruste - DTI / Computer Science'
  },
  {
    desc: 'Prepare tables for nodes and edges',
    date: '08/10/2020',
    stakeholders: 'Sander Hanni, Iryna Selina',
    responsible: 'Sander Hanni - DTI / Computer Science'
  },
  {
    desc: 'Fill out Mid-term report',
    date: '12/10/2020',
    stakeholders: 'Everyone',
    responsible: 'Iryna Selina - DTI / Digital Learning Games'
  },
  {
    desc: 'Design the visualization',
    date: '07/11/2020',
    stakeholders: 'Ibitoye Olamilekan Hammed',
    responsible: 'Ibitoye Olamilekan Hammed - Politics and Governance'
  },
  {
    desc: 'Set up portfolio website',
    date: '15/11/2020',
    stakeholders: 'Iryna Selina',
    responsible: 'Iryna Selina - DTI / Digital Learning Games'
  },
  {
    desc: 'Create the visualization',
    date: '18/11/2020',
    stakeholders: 'Ibitoye Olamilekan Hammed, Sander Hanni',
    responsible: 'Ibitoye Olamilekan Hammed - Politics and Governance'
  },
  {
    desc: 'Write posts for the website',
    date: '01/12/2020',
    stakeholders: 'Everyone',
    responsible: 'Marianne Aruste - DTI / Computer Science'
  },
  {
    desc: 'Create final presentation',
    date: '05/12/2020',
    stakeholders: 'Rohid Safi',
    responsible: 'Rohid Safi - Open Society Technologies'
  }
];

export const selfReflectionReports = [
  'Over the past few months, I have had the opportunity to learn and gain new knowledge from my usual comfort zone. I do not have any idea on data visualization, however after working together with a great team, I was able to gain new ideas such as extraction from reddit, learned about scraping data and the use of python library. Every of the team members contributed uniquely and the research and analysis result reflected the team creativity and efficiency.',
  'Before the start of the project I only had a vague understanding of what Data Visualization is. I had my own thoughts of how it is done, seeing how it could be useful for the field I want to work in, and participating in the project has taught me how it is actually done. I learned that data visualization requires much more than I initially thought. It is a very tedious process, but having tools or knowing programming to automate it makes the process much faster. However, in the end you receive an easy to understand image to show your data. Our team managed to achieve the project goal of analysing the data and creating visualization for it. The findings were different from what I expected - I thought there would be more connections between subreddits and more prominent posters active across the different subreddits.',
  'Our main goal was to analyze several subreddits and find the most frequent posters.  In order to fulfil the goal we needed to process literature connected to the subject, pick out the subreddits that we wanted to analyze , learn how to scrape data and finally visualize the data in an understandable way. The Project happened to be very useful for me as I was taking a similar course where we had to visualize different networks or connections. \n' +
  'Originally we had an idea what the result might be but during the scraping, analyzing and discussing everything with our project coordinator, we found different results. I think our team achieved the project goal perfectly',
  'Being a proud member of team who took the responsibility of analysing the reddit and focused on game developer’s communities and their connections, my role in the group was to present and gather up materials, but also we had excellent team build up together and contributed all aspects of the project, for instance extracting information from reddit using python library, and finding different visualization tools for social networks.\n' +
  'I personally learned tons of new things, faced challenges and by helping each other as a team we manage to tackle the challenges and solve the issues together, with my own involved activities I manage to learn to work with Gephi tools,python libraries, and advance excel functions for analysis of data.\n',
  'The entire project wounded up being a lot larger, detailed and research inducing than I originally thought. In terms of experience and knowledge I think that I have gained a lot in both of these categories. Many challenges arose and different methods were needed to be used to overcome those hurdles. The combination of reading through relevant research papers and learning more about data science, graphs, social networks and many other small parts that were combined into achieving our project goal. Even though the final findings were a little different from what I expected them to be from when we first sought out to find the answer It ended up teaching a lot more and my understanding of this topic has certainly expanded. I ended up learning a lot in order to complete this project.'
]



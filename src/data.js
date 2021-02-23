
export const CVData = {
    personalData: {
      name: 'Phattaraphon Pewruange',
      title: 'Software Developer',
      image: 'https://scontent.fnak2-1.fna.fbcdn.net/v/t1.0-9/44153215_2169162796666553_8155936573465034752_o.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeEIjkuqmqZ0sij91LOnYzajP9itLSx3McU_2K0tLHcxxfU3rHkBnqplsvXaQlxOifnZeg4XG1T8asw1At0xZp0d&_nc_ohc=Jgac0E3T6fQAX-iJD8H&_nc_ht=scontent.fnak2-1.fna&oh=697cbcaf228c615fe41af5200c9183f5&oe=6059CD51',
      contacts: [
        { type: 'email', value: 'phattaraphon.pe.61@ubu.ac.th' },
        { type: 'phone', value: '0989153312' },
        { type: 'location', value: 'ubon ratchathani' },
        { type: 'website', value: 'https://phattaraphon-resume.web.app' },
        // { type: 'linkedin', value: 'linkedin.com/in/notexists' },
        // { type: 'twitter', value: 'twitter.com/404' },
        { type: 'github', value: 'https://github.com/Phattaraphon61' }
      ]
    },
    sections: [
      // {
      //   type: 'text',
      //   title: 'Career Profile',
      //   content: 'When I was child, I always want to be a developer. I think I am now. Culpa proident ad officia minim Lorem sint excepteur irure culpa nisi aliquip nostrud.Laborum voluptate nostrud fugiat occaecat proident veniam excepteur pariatur amet ex sit.Anim aliquip do in commodo adipisicing.Nulla adipisicing nisi enim ullamco sunt veniam.Ullamco labore sunt Lorem veniam id et Lorem magna eiusmod aute. Aliquip minim est consectetur anim mollit aliqua ex elit do et nulla do. Cupidatat ad sunt cillum sint consectetur sunt cillum eiusmod ad esse aliqua. Aute anim elit amet in duis aute ipsum deserunt qui deserunt officia excepteur veniam. Et laboris nostrud est ipsum nulla fugiat deserunt magna velit irure. Ullamco duis ut magna ea tempor enim in ipsum.',
      //   icon: 'usertie'
      // },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Ratchaprachanukroh School 29 Sisaket',
            authority: 'High school',
            authorityWebSite: 'http://rpg29.ssk.in.th/',
            rightSide: '2013 - 2017'
          },
          {
            title: 'ubon ratchathani',
            authority: 'University',
            authorityWebSite: 'https://www.ubu.ac.th/',
            rightSide: '2018 - Present'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        // description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Backend Developer',
            company: 'Cloud Space',
            description: 'I\'m working as a Backend developer',
            companyWebSite: 'https://www.cloudspace-th.com/',
            companyMeta: 'Deploy from DijitalOcean ',
            datesBetween: '2020 - Present',
            descriptionTags: ['Javascript', 'React', 'Nodejs']
          },
          // {
          //   title: 'Software Developer',
          //   company: 'Some Company Example INC',
          //   description: 'I\'m using ReactJS and working as a front-end developer',
          //   companyWebSite: 'http://somecompanyexample.com',
          //   companyMeta: 'Little info about company',
          //   datesBetween: '2016.8 - 2017.10'
          // },
          // {
          //   title: 'Intern',
          //   company: 'Some Software Example INC',
          //   description: 'I was warming up.',
          //   companyWebSite: 'http://someexamplecompany.com',
          //   companyMeta: 'SF USA',
          //   datesBetween: '2012.06 - 2012.10'
          // }
        ]
      },
      // {
      //   type: 'projects-list',
      //   title: 'Projects',
      //   description: 'Optional',
      //   icon: 'tasks',
      //   groups: [
      //     {
      //       sectionHeader: 'Company Name',
      //       description: 'Optional',
      //       items: [
      //         { title: 'Project', projectUrl: 'optional', description: 'Optional' },
      //         { title: 'Project', projectUrl: 'optional', description: 'Optional' },
      //         { title: 'Project', projectUrl: 'optional', description: 'Optional' }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   type: 'common-list',
      //   title: 'Conferences & Certificates',
      //   description: '',
      //   icon: 'comments',
      //   items: [
      //     {
      //       title: 'Some Conferences / 2019',
      //       authority: 'SomeConf',
      //       authorityWebSite: 'https://www.someconf.somesome'
      //     },
      //     {
      //       title: 'Some Conferences / 2019',
      //       authority: 'SomeConf',
      //       authorityMeta: 'Speaker',
      //       authorityWebSite: 'https://www.someconf.somesome',
      //       rightSide: 'test'
      //     },
      //     {
      //       title: 'Some Conferences / 2012',
      //       authorityMeta: 'Speaker'
      //     }
      //   ]
      // },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'Thai',
            authorityMeta: 'Professional'
          },
          {
            authority: 'English',
            authorityMeta: 'Beginner'
          },
          {
            authority: 'Cambodian',
            authorityMeta: 'Advanced'
          },
          {
            authority: 'Lao',
            authorityMeta: 'Advanced'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS','HTML', 'SQL', 'Angular', 'NodeJs','Python','Java','NoSql','Django','Flask','Linux server','Flutter','Ionic','Android Studio','Dart','PHP','Mean Stack','FastAPI']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Play games','Watch a movie','Listen to music','Play music']
      }
    ]
  }
  
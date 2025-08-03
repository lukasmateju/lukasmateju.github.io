// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "Resume",
          description: "View and download my most current resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Here are my current projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "dropdown-involvements",
              title: "Involvements",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/involvements/";
              },
            },{id: "dropdown-favorites",
              title: "Favorites",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/favorites";
              },
            },{id: "dropdown-random-facts",
              title: "Random Facts",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/random-facts/";
              },
            },{id: "dropdown-games",
              title: "Games",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/games/";
              },
            },{id: "post-presenting-my-summer-project-at-lanl",
        
          title: 'Presenting My Summer Project at LANL <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This past Tuesday, I presented my summer project at the Los Alamos National Laboratory Student Symposium. Over the last few months, I’ve been working with the Isotope Production Team at Los Alamos National Laboratory on a panel system to improve isotope purification inside hot cells.Big thank you to Veronika Mocko (Quaiserova) and C-IIAC for their support!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/lukas-mateju_this-past-tuesday-i-presented-my-summer-activity-7357409881961734144-Woju?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZS4LIB35DP_2qintrtk4diQJj88d0ZFkc", "_blank");
          
        },
      },{id: "post-e-portfolio-build-log",
        
          title: "E-Portfolio Build Log",
        
        description: "Ongoing updates, fixes, and features for this site",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/posts/2025/eportfolio-build-log/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "involvements-michigan-build-amp-launch",
          title: 'Michigan Build &amp;amp; Launch',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/b-l-involv/";
            },},{id: "involvements-boy-scouts-of-america",
          title: 'Boy Scouts of America',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/boy-scouts-involv/";
            },},{id: "involvements-michigan-czech-student-association",
          title: 'Michigan Czech Student Association',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/czech-club-involv/";
            },},{id: "involvements-grandville-high-school",
          title: 'Grandville High School',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/grandville-involv/";
            },},{id: "involvements-hail-robotics",
          title: 'HAIL Robotics',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/hail-involv/";
            },},{id: "involvements-human-powered-submarine",
          title: 'Human Powered Submarine',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/hps-involv/";
            },},{id: "involvements-high-school-robotics",
          title: 'High School Robotics',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/hs-robotics-involv/";
            },},{id: "involvements-high-school-swim-amp-dive",
          title: 'High School Swim &amp;amp; Dive',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/hs-swim-involv/";
            },},{id: "involvements-los-alamos-national-labratory-internship",
          title: 'Los Alamos National Labratory Internship',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/lanl-involv/";
            },},{id: "involvements-nebrija-university-study-abroad-course",
          title: 'Nebrija University Study Abroad Course',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/nebrija-involv/";
            },},{id: "involvements-robodawgs-coaching",
          title: 'Robodawgs Coaching',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/robodawgs-involv/";
            },},{id: "involvements-swoboda-inc-internship",
          title: 'Swoboda Inc. Internship',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/swoboda-involv/";
            },},{id: "involvements-tau-epsilon-kappa",
          title: 'Tau Epsilon Kappa',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/tek-involv/";
            },},{id: "involvements-university-of-michigan",
          title: 'University of Michigan',
          description: "Here is the description of a blank involvement",
          section: "Involvements",handler: () => {
              window.location.href = "/involvements/uom-involv/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-404-page-minigame-project",
          title: '404 Page Minigame Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/404Minigame_proj/";
            },},{id: "projects-album-drawings-project",
          title: 'Album Drawings Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Album-Drawings_proj/";
            },},{id: "projects-beetle-weight-battle-bot-project",
          title: 'Beetle Weight Battle Bot Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Battle-Bot_proj/";
            },},{id: "projects-cricut-software-hack-project",
          title: 'Cricut Software Hack Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CricutHack_proj/";
            },},{id: "projects-e-portfolio-website-project",
          title: 'E-Portfolio Website Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EPortfolio_proj/";
            },},{id: "projects-ioe-201-project",
          title: 'IOE 201 Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IOE201_Proj/";
            },},{id: "projects-ioe-373-project",
          title: 'IOE 373 Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IOE373_proj/";
            },},{id: "projects-konami-code-project",
          title: 'Konami Code Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/KonamiCode_proj/";
            },},{id: "projects-lanl-internship-project",
          title: 'LANL Internship Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LANL_proj/";
            },},{id: "projects-me-250-project",
          title: 'ME 250 Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ME-250_proj/";
            },},{id: "projects-umich-planning-spreadsheet-project",
          title: 'UMich Planning Spreadsheet Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Planning-Sheet_proj/";
            },},{id: "projects-stumble-projects",
          title: 'Stumble Projects',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Stumble_proj/";
            },},{id: "projects-tek-pledge-project",
          title: 'TEK Pledge Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TEK-Pledge_proj/";
            },},{id: "projects-vex-2023-season-project",
          title: 'VEX 2023 Season Project',
          description: "Here is the description of a blank project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VEX-2023_proj/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lukas-mateju", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lukasmateju", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/lukasmateju_", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@www.youtube.com/@LukasMateju_", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/digrkwo3c9g0keloxyaaf0gpm?si=88025444254f410c", "_blank");
        },
      },{
        id: 'social-letterboxed',
        title: 'Letterboxed',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-discogs',
        title: 'Discogs',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

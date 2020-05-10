export default {
  title: "Pearson Tests of English",
  description: 'I hate English at all!',
  htmlContext: {
    favicon: '/public/favicon.png',
  },
  editBranch: "development",
  repository: "https://github.com/nguyenletan/PTE",
  menu: [
    "Pearson Tests of English",
    "Write From Dictation",
    "Repeat Sentence",
    "Describe Image",
    {
      name: "Collocations",
      menu: [
        "Introduction",
        "1. Family",
        "2. Relationships",
        "3. Appearance",
        "4. Character and Behaviour",
        "5. Feeling",
        "6. Houses and Apartments",
        "7. Eating",
        "8. Movies and Books",
        "9. Music",
        "10. Sports",
        "11. Health and Sickness",
        "12. Computers",
        "13. Study",
        "14. Academic English",
        "15. Work",
        "16. Business",
        "17. Money",
        "18. Travel",
        "19. Weather",
        "20. City",
        "21. Countryside",
        "22. Crime",
        "23. Law/Justice",
        "24. War & Peace",
        "25. Global Problems",
        "26. Time",
        "27. Sound",
        "28. Size",
        "29. Light",
        "30. Color",
        "31. Texture",
        "32. Smell",
        "33. Taste",
        "34. Statistics",
        "35. Movement & Speed",
        "36. Changes",
        "37. Speaking",
        "38. Starting & Finishing",
        "39. Success & Failure",
        "40. Cause & Effect",
        "41. Memories",
        "42. Agreeing & Disagreeing",
        "43. Beliefs & Doubts",
        "44. Deciding & Choosing",
        "45. Claiming & Denying",
        "46. Liking & Disliking"
      ]
    },
  ],
  themeConfig: {
    head: {},
    styles: {
      h1: {
        /*textTransform: 'uppercase'*/
      },

    },
    colors: {
      "text": "#00044c",
      "background": "#FDFFFF",
      "primary": "#47c1bf",
      "secondary": "lightseagreen",
      "highlight": "#b7ecec",
      "muted": "#e6e6e6",
      "gray": "#dfe3e8",
      "accent": "#f49342",
      "darken": "#00044c",
      modes: {
        dark: {
          "text": "hsl(210, 50%, 96%)",
          "background": "hsl(230, 25%, 18%)",
          "primary": "hsl(260, 100%, 80%)",
          "secondary": "hsl(290, 100%, 80%)",
          "highlight": "hsl(260, 20%, 40%)",
          "purple": "hsl(290, 100%, 80%)",
          "muted": "hsla(230, 20%, 0%, 20%)",
          "gray": "hsl(210, 50%, 60%)"
        }
      }
    },
    fonts: {
      body: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading:
        '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      monospace: "Menlo, monospace",
      size: "16px"
    },
    lineHeights: {
      body: 1.66,
      heading: 1.125
    },
    fontSizes: [13, 14, 15, 20, 22, 30, 35, 60, 80],
    space: [0, 4, 8, 16, 38, 64, 128, 256, 512],
  },
  ignore: ['README.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']
};

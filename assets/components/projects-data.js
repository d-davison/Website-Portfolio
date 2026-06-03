/* =====================================================================
   PROJECTS — the only file you edit to add / change / reorder projects.
   =====================================================================

   To add a project, copy one block and fill it in:

     {
       name: "My Game",                         // shown as the title
       href: "my-game",                    // page it links to
       image: "assets/images/.../banner.png",   // the picture
       featured: true,                          // true = highlighted box with outline
       tags: [                                  // the pill icons (top to bottom of box)
         { icon: "unity",  label: "Unity"  },
         { icon: "steam",  label: "Steam"  },
       ],
     },

   Available icon keys (see ICONS map at the bottom):
     unity, unreal, steam, xbox, android, apple, web, vr

   - The homepage shows the first few via <project-grid limit="3">.
   - To temporarily hide a project, just comment its block out (or add
     hidden: true) — far easier than commenting out 30 lines of HTML.
*/

window.PROJECTS = [
  {
    name: "Sledding Game",
    href: "sledding-game",
    image: "assets/images/sledding/work-sledding.png",
    featured: true,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "steam", label: "Steam" },
      { icon: "xbox", label: "Xbox" },
    ],
  },
  {
    name: "Night Crew",
    href: "night-crew",
    image: "assets/images/night-crew/work-nightcrew.jpg",
    featured: true,
    tags: [
      { icon: "unreal", label: "Unreal Engine" },
      { icon: "steam", label: "Steam" },
    ],
  },
  {
    name: "JOSTL.",
    href: "jostl",
    image: "assets/images/jostl/work-jostl2.png",
    featured: true,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "android", label: "Android" },
      { icon: "apple", label: "iOS" },
    ],
  },
  {
    name: "Murder on the Ocean Serenity",
    href: "cruise-murder-mystery",
    image: "assets/images/motos/work-motos3.png",
    featured: true,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "web", label: "WebGL" },
      { icon: "vr", label: "AR" },
    ],
  },
  {
    name: "Cosmico",
    href: "cosmico",
    image: "assets/images/cosmico/work-cosmico.png",
    featured: false,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "android", label: "Android" },
      { icon: "apple", label: "iOS" },
    ],
  },
  {
    name: "Desert Island",
    href: "vr-pain-manager",
    image: "assets/images/vr-pain/painvr-banner2.png",
    featured: false,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "vr", label: "Virtual Reality" },
    ],
  },

  /* ---- Hidden for now: uncomment a block to bring it back ----------

  {
    name: "Tilt Rocket",
    href: "tilt-rocket",
    image: "assets/images/tilt-rocket/tilt-rocket-banner.png",
    featured: false,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "android", label: "Android" },
    ],
  },
  {
    name: "Impact Display",
    href: "impact-display",
    image: "assets/images/impact/work-impactdisplay.jpg",
    featured: false,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "web", label: "WebGL" },
      { icon: "vr", label: "AR" },
    ],
  },
  {
    name: "Free Sweetcorn",
    href: "free-sweetcorn",
    image: "assets/images/free-sweetcorn/free-sweetcorn-banner.png",
    featured: false,
    tags: [
      { icon: "unity", label: "Unity" },
      { icon: "android", label: "Android" },
    ],
  },

  ------------------------------------------------------------------- */
];

// Maps an icon key to its image file. Add new icons here once.
window.PROJECT_ICONS = {
  unity: "assets/images/icons/unity64.png",
  unreal: "assets/images/icons/unreal-engine64.png",
  steam: "assets/images/icons/steam64.png",
  xbox: "assets/images/icons/xbox64.png",
  android: "assets/images/icons/android64.png",
  apple: "assets/images/icons/apple64.png",
  web: "assets/images/icons/web64.png",
  vr: "assets/images/icons/vr64.png",
};

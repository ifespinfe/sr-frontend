import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './popover-DcCqGT5R.mjs';
import { a as useResizeObserver } from './index-CNLs9n-l.mjs';

const eventRequests = [
  {
    id: 1,
    host: {
      id: 101,
      name: "Alice Johnson",
      email: "alice@example.com",
      type: "host",
      stage_name: "DJ Alice",
      profession: "DJ",
      slug: "alice-johnson",
      qrcode: "QR101",
      profile_picture: "https://example.com/profile/101.jpg",
      bio: "Passionate DJ mixing the best beats.",
      gender: "female",
      dob: "1990-05-15",
      country: "USA",
      created_at: "2023-10-01T10:00:00Z",
      updated_at: "2023-10-10T12:00:00Z"
    },
    nickname: "Summer Beats",
    audience: {
      id: 201,
      name: "John Smith",
      email: "john.smith@example.com",
      type: "audience",
      stage_name: "MusicFan123",
      profession: "Engineer",
      slug: "john-smith",
      qrcode: "QR201",
      profile_picture: "https://example.com/profile/201.jpg",
      bio: "Lover of all genres of music.",
      gender: "male",
      dob: "1985-09-10",
      country: "Canada",
      created_at: "2023-09-15T10:00:00Z",
      updated_at: "2023-10-05T14:00:00Z"
    },
    type: "song",
    status: "new",
    description: "Get ready for some amazing tunes!",
    artist: null,
    song: null,
    amount: "50.00",
    created_at: "2023-10-15T08:00:00Z"
  },
  {
    id: 2,
    host: {
      id: 102,
      name: "Ben Carter",
      email: "ben@example.com",
      type: "host",
      stage_name: "MC Ben",
      profession: "MC",
      slug: "ben-carter",
      qrcode: "QR102",
      profile_picture: "https://example.com/profile/102.jpg",
      bio: "Energetic MC bringing the hype.",
      gender: "male",
      dob: "1987-08-12",
      country: "UK",
      created_at: "2023-09-20T09:00:00Z",
      updated_at: "2023-10-12T11:00:00Z"
    },
    name: "Hype Night",
    audience: {
      id: 202,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      type: "audience",
      stage_name: "DanceQueen",
      profession: "Dancer",
      slug: "jane-doe",
      qrcode: "QR202",
      profile_picture: "https://example.com/profile/202.jpg",
      bio: "Professional dancer and music enthusiast.",
      gender: "female",
      dob: "1992-11-03",
      country: "Australia",
      created_at: "2023-09-25T08:00:00Z",
      updated_at: "2023-10-01T10:30:00Z"
    },
    type: "hype",
    status: "completed",
    hype_message: "Let\u2019s turn it up tonight!",
    artist: null,
    song: null,
    amount: "75.00",
    created_at: "2023-10-16T09:00:00Z"
  },
  {
    id: 3,
    host: {
      id: 103,
      name: "Catherine Green",
      email: "catherine@example.com",
      type: "host",
      stage_name: "DJ Cat",
      profession: "DJ",
      slug: "catherine-green",
      qrcode: "QR103",
      profile_picture: "https://example.com/profile/103.jpg",
      bio: "Mixing beats for all occasions.",
      gender: "female",
      dob: "1989-12-18",
      country: "Germany",
      created_at: "2023-10-05T14:00:00Z",
      updated_at: "2023-10-12T15:00:00Z"
    },
    name: "Electronic Vibes",
    audience: {
      id: 203,
      name: "Rick Thompson",
      email: "rick.thompson@example.com",
      type: "audience",
      stage_name: "ElectroRick",
      profession: "Programmer",
      slug: "rick-thompson",
      qrcode: "QR203",
      profile_picture: "https://example.com/profile/203.jpg",
      bio: "Tech lover with a passion for electronic music.",
      gender: "male",
      dob: "1993-07-15",
      country: "Netherlands",
      created_at: "2023-09-10T07:00:00Z",
      updated_at: "2023-09-18T12:30:00Z"
    },
    type: "song",
    status: "now-playing",
    hype_message: "Time to get into the groove!",
    artist: null,
    song: null,
    amount: "60.00",
    created_at: "2023-10-10T10:00:00Z"
  },
  {
    id: 4,
    host: {
      id: 104,
      name: "Daniel Lee",
      email: "daniel@example.com",
      type: "host",
      stage_name: "DJ D-Lite",
      profession: "DJ",
      slug: "daniel-lee",
      qrcode: "QR104",
      profile_picture: "https://example.com/profile/104.jpg",
      bio: "Spinning the best tracks for all events.",
      gender: "male",
      dob: "1991-06-21",
      country: "Singapore",
      created_at: "2023-09-30T12:00:00Z",
      updated_at: "2023-10-08T13:00:00Z"
    },
    name: "Urban Beat Fest",
    audience: {
      id: 204,
      name: "Emily White",
      email: "emily.white@example.com",
      type: "audience",
      stage_name: "GrooveMaster",
      profession: "Teacher",
      slug: "emily-white",
      qrcode: "QR204",
      profile_picture: "https://example.com/profile/204.jpg",
      bio: "Music is life.",
      gender: "female",
      dob: "1988-01-22",
      country: "New Zealand",
      created_at: "2023-10-02T09:00:00Z",
      updated_at: "2023-10-11T10:00:00Z"
    },
    type: "hype",
    status: "new",
    hype_message: "Let\u2019s get this party started!",
    artist: null,
    song: null,
    amount: "80.00",
    created_at: "2023-10-14T11:00:00Z"
  },
  {
    id: 5,
    host: {
      id: 105,
      name: "Ella Martinez",
      email: "ella@example.com",
      type: "host",
      stage_name: "DJ Ella",
      profession: "DJ",
      slug: "ella-martinez",
      qrcode: "QR105",
      profile_picture: "https://example.com/profile/105.jpg",
      bio: "Blending sounds to create magic.",
      gender: "female",
      dob: "1995-03-14",
      country: "Spain",
      created_at: "2023-09-28T14:00:00Z",
      updated_at: "2023-10-10T14:30:00Z"
    },
    name: "Beach Party Vibes",
    audience: {
      id: 205,
      name: "Mark Williams",
      email: "mark.williams@example.com",
      type: "audience",
      stage_name: "PartyKing",
      profession: "Event Organizer",
      slug: "mark-williams",
      qrcode: "QR205",
      profile_picture: "https://example.com/profile/205.jpg",
      bio: "Expert in creating unforgettable experiences.",
      gender: "male",
      dob: "1990-04-05",
      country: "France",
      created_at: "2023-09-20T12:00:00Z",
      updated_at: "2023-10-06T10:00:00Z"
    },
    type: "song",
    status: "new",
    hype_message: "The best beach vibes coming your way!",
    artist: null,
    song: null,
    amount: "55.00",
    created_at: "2023-10-15T12:30:00Z"
  },
  {
    id: 6,
    host: {
      id: 106,
      name: "Noah Taylor",
      email: "noah.taylor@example.com",
      type: "host",
      stage_name: "GuitarHero",
      profession: "Musician",
      slug: "guitarhero",
      qrcode: "https://example.com/qrcode6",
      profile_picture: "https://example.com/profiles/noah.jpg",
      bio: "Acoustic guitar player with a passion for folk music.",
      gender: "male",
      dob: "1990-01-20",
      country: "USA",
      created_at: "2022-03-15T14:30:00Z",
      updated_at: "2023-04-20T14:30:00Z"
    },
    name: "Folk Music Night",
    audience: {
      id: 206,
      name: "Isabella Martinez",
      email: "isabella.martinez@example.com",
      type: "audience",
      stage_name: "Bella",
      profession: "Folk Music Lover",
      slug: "bella",
      qrcode: "https://example.com/qrcode206",
      profile_picture: "https://example.com/profiles/isabella.jpg",
      bio: "Folk music enthusiast and community volunteer.",
      gender: "female",
      dob: "1995-06-18",
      country: "USA",
      created_at: "2022-11-30T08:15:00Z",
      updated_at: "2023-08-15T08:15:00Z"
    },
    type: "song",
    status: "new",
    hype_message: "Join us for an evening of soulful melodies!",
    artist: null,
    song: null,
    amount: "90.00",
    created_at: "2023-10-05T19:00:00Z"
  },
  {
    id: 7,
    host: {
      id: 107,
      name: "Mia Wong",
      email: "mia.wong@example.com",
      type: "host",
      stage_name: "DJ Mia",
      profession: "DJ",
      slug: "dj-mia",
      qrcode: "https://example.com/qrcode7",
      profile_picture: "https://example.com/profiles/mia.jpg",
      bio: "Bringing the party vibes with house beats.",
      gender: "female",
      dob: "1991-09-25",
      country: "Singapore",
      created_at: "2023-01-15T16:45:00Z",
      updated_at: "2023-06-10T16:45:00Z"
    },
    name: "House Party",
    audience: {
      id: 207,
      name: "Ethan Chen",
      email: "ethan.chen@example.com",
      type: "audience",
      stage_name: "DJFanEthan",
      profession: "Student",
      slug: "djfanethan",
      qrcode: "https://example.com/qrcode207",
      profile_picture: "https://example.com/profiles/ethan.jpg",
      bio: "Music student and DJ enthusiast.",
      gender: "male",
      dob: "1998-02-02",
      country: "Singapore",
      created_at: "2023-02-20T12:00:00Z",
      updated_at: "2023-07-10T12:00:00Z"
    },
    type: "hype",
    status: "new",
    hype_message: "Dance all night long!",
    artist: null,
    song: null,
    amount: "220.00",
    created_at: "2023-10-10T21:00:00Z"
  },
  {
    id: 8,
    host: {
      id: 108,
      name: "James Anderson",
      email: "james.anderson@example.com",
      type: "host",
      stage_name: "JazzMan",
      profession: "Musician",
      slug: "jazzman",
      qrcode: "https://example.com/qrcode8",
      profile_picture: "https://example.com/profiles/james.jpg",
      bio: "Jazz musician with a love for improvisation.",
      gender: "male",
      dob: "1986-08-14",
      country: "USA",
      created_at: "2022-05-05T11:00:00Z",
      updated_at: "2023-03-30T11:00:00Z"
    },
    name: "Jazz Evening",
    audience: {
      id: 208,
      name: "Chloe Brown",
      email: "chloe.brown@example.com",
      type: "audience",
      stage_name: "JazzLoverChloe",
      profession: "Teacher",
      slug: "jazzloverchloe",
      qrcode: "https://example.com/qrcode208",
      profile_picture: "https://example.com/profiles/chloe.jpg",
      bio: "Teaching music and loving jazz.",
      gender: "female",
      dob: "1992-07-30",
      country: "USA",
      created_at: "2022-12-01T14:45:00Z",
      updated_at: "2023-06-25T14:45:00Z"
    },
    type: "song",
    status: "new",
    hype_message: "Join us for a relaxing night of jazz!",
    artist: null,
    song: null,
    amount: "110.00",
    created_at: "2023-10-15T18:30:00Z"
  },
  {
    id: 9,
    host: {
      id: 109,
      name: "Olivia Green",
      email: "olivia.green@example.com",
      type: "host",
      stage_name: "Olivia the Singer",
      profession: "Singer",
      slug: "olivia-the-singer",
      qrcode: "https://example.com/qrcode9",
      profile_picture: "https://example.com/profiles/olivia.jpg",
      bio: "Pop singer with a passion for live performances.",
      gender: "female",
      dob: "1993-05-05",
      country: "Canada",
      created_at: "2023-03-10T09:30:00Z",
      updated_at: "2023-09-20T09:30:00Z"
    },
    name: "Pop Concert Night",
    audience: {
      id: 209,
      name: "Lucas Scott",
      email: "lucas.scott@example.com",
      type: "audience",
      stage_name: "PopFanLucas",
      profession: "Graphic Designer",
      slug: "popfanlucas",
      qrcode: "https://example.com/qrcode209",
      profile_picture: "https://example.com/profiles/lucas.jpg",
      bio: "Lover of pop music and design.",
      gender: "male",
      dob: "1994-11-11",
      country: "Canada",
      created_at: "2022-08-08T10:00:00Z",
      updated_at: "2023-01-20T10:00:00Z"
    },
    type: "hype",
    status: "new",
    hype_message: "Get ready for a night of hits!",
    artist: null,
    song: null,
    amount: "180.00",
    created_at: "2023-10-16T20:00:00Z"
  }
];
const LONG_ARTICLE = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod asperiores error cum, iusto, suscipit praesentium voluptate quae voluptatum magnam officia incidunt quas distinctio illum dignissimos quibusdam eaque veritatis! Fugiat.";
const mockEventSpenders = [
  {
    total: 5100,
    user_id: "5",
    email: "lily.evans@example.com",
    name: "Lily Evans"
  },
  {
    total: 4250,
    user_id: "1",
    email: "amelia.earhart@example.com",
    name: "Amelia Earhart"
  },
  {
    total: 3500,
    user_id: "3",
    email: "sara.lane@example.com",
    name: "Sara Lane"
  },
  {
    total: 1800,
    user_id: "2",
    email: "sophia.wilson@example.com",
    name: "Sophia Wilson"
  },
  {
    total: "1450.75",
    user_id: "6",
    email: "michael.wolfe@example.com",
    name: "Michael Wolfe"
  },
  {
    total: 1200,
    user_id: "10",
    email: "emily.bronte@example.com",
    name: "Emily Bronte"
  },
  { total: 890, user_id: "8", email: "john.doe@example.com", name: "John Doe" },
  {
    total: "640.75",
    user_id: "7",
    email: "audience@spinrequest.com",
    name: "Test Audience"
  },
  {
    total: "500",
    user_id: "9",
    email: "brad.pitt@example.com",
    name: "Brad Pitt"
  },
  {
    total: "275",
    user_id: "4",
    email: "derek.smith@example.com",
    name: "Derek Smith"
  }
];
const useNodeContent = (node) => {
  const height = ref(0);
  const width = ref(0);
  const scrollHeight = ref(0);
  const scrollWidth = ref(0);
  const xOverflow = ref(false);
  const yOverflow = ref(false);
  useResizeObserver(node, (entries) => {
    for (const entry of entries) {
      const { width: cWidth, height: cHeight } = entry.contentRect;
      width.value = cWidth;
      height.value = cHeight;
      scrollWidth.value = entry.target.scrollWidth;
      scrollHeight.value = entry.target.scrollHeight;
      xOverflow.value = width.value < scrollWidth.value;
      yOverflow.value = height.value < scrollHeight.value;
    }
  });
  return {
    width,
    height,
    scrollWidth,
    scrollHeight,
    xOverflow,
    yOverflow
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "summary",
  __ssrInlineRender: true,
  props: {
    content: { default: LONG_ARTICLE }
  },
  setup(__props) {
    const content_ref = ref();
    const { yOverflow } = useNodeContent(content_ref);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space max-w-full w-full" }, _attrs))}><div class="max-h-12 overflow-hidden text-ellipsis line-clamp-2">${ssrInterpolate(_ctx.content)}</div>`);
      if (unref(yOverflow)) {
        _push(ssrRenderComponent(_sfc_main$1, { content: _ctx.content }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="outline-0 p-0 text-sm text-primary underline hover:no-underline"${_scopeId}> Show more </button>`);
            } else {
              return [
                createVNode("button", {
                  class: "outline-0 p-0 text-sm text-primary underline hover:no-underline",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, " Show more ", 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/summary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _, eventRequests as e, mockEventSpenders as m };
//# sourceMappingURL=summary-pgNK0JTY.mjs.map

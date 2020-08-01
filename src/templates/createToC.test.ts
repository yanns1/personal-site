import { createToC, ToCData } from "./post";

it("returns headings with right depth in original order", () => {
  const tocData: ToCData = {
    items: [
      {
        items: [
          {
            url: "url",
            title: "depth2",
          },
        ],
      },
      {
        url: "url",
        title: "depth1",
        items: [
          {
            items: [
              {
                url: "url",
                title: "depth3",
              },
            ],
          },
        ],
      },
    ],
  };
  const renderedDepths = createToC(tocData, "/a-post-url/").map(
    (heading) => heading.title
  );
  expect(renderedDepths).toEqual(["depth2", "depth1", "depth3"]);
});

it("returns headings with right title and url in original order", () => {
  const tocData: ToCData = {
    items: [
      {
        items: [
          {
            url: "url1",
            title: "title1",
          },
        ],
      },
      {
        url: "url2",
        title: "title2",
        items: [
          {
            items: [
              {
                url: "url3",
                title: "title3",
              },
            ],
          },
        ],
      },
    ],
  };
  const renderedTitles = createToC(tocData, "/a-post-url/").map(
    (heading) => heading.title
  );
  const renderedUrls = createToC(tocData, "/a-post-url/").map(
    (heading) => heading.url
  );

  expect(renderedTitles).toEqual(["title1", "title2", "title3"]);
  expect(renderedUrls).toEqual([
    "/a-post-url/url1",
    "/a-post-url/url2",
    "/a-post-url/url3",
  ]);
});

it("works when lot of depths", () => {
  const tocData: ToCData = {
    items: [
      {
        url: "1",
        title: "1",
        items: [
          {
            url: "2",
            title: "2",
            items: [
              {
                url: "3",
                title: "3",
                items: [
                  {
                    url: "4",
                    title: "4",
                    items: [
                      {
                        url: "5",
                        title: "5",
                        items: [
                          {
                            url: "6",
                            title: "6",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  expect(createToC(tocData, "/a-post-url/")).toEqual([
    { title: "1", url: "/a-post-url/1", depth: 1 },
    { title: "2", url: "/a-post-url/2", depth: 2 },
    { title: "3", url: "/a-post-url/3", depth: 3 },
    { title: "4", url: "/a-post-url/4", depth: 4 },
    { title: "5", url: "/a-post-url/5", depth: 5 },
    { title: "6", url: "/a-post-url/6", depth: 6 },
  ]);
});

it("ignores heading with depth > 6", () => {
  const tocData: ToCData = {
    items: [
      {
        items: [
          {
            items: [
              {
                url: "3",
                title: "random-heading-with-depth-3",
                items: [
                  {
                    items: [
                      {
                        items: [
                          {
                            items: [
                              {
                                url: "7",
                                title: "7",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  expect(createToC(tocData, "/a-post-url/")).toEqual([
    { title: "random-heading-with-depth-3", url: "/a-post-url/3", depth: 3 },
  ]);
});

it("returns empty array if nothing in tocData", () => {
  expect(createToC({}, "/a-post-url/")).toEqual([]);
});

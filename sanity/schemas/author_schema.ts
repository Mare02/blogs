import { Rule } from "sanity";

const AuthorSchema = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              options: {
                list: [
                  "Twitter",
                  "Instagram",
                  "LinkedIn",
                  "Website",
                  "YouTube",
                  "Other",
                ],
              },
            },
            { name: "url", type: "url" },
          ],
        },
      ],
    },
  ],
};

export default AuthorSchema;

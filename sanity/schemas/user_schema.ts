import { Rule } from "sanity";

const UserSchema = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email()
    },
    {
      name: 'passwordHash',
      title: 'Password Hash',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { value: 'user', title: 'User' },
          { value: 'writter', title: 'Writter' },
        ],
        layout: 'radio'
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
              list: ['twitter', 'facebook', 'instagram', 'linkedin', 'github', 'website', /* ...other platforms */]
            }
          },
          { name: 'url', title: 'URL', type: 'url' }
        ]
      }]
    }
  ],
  initialValue: {
    role: "user",
  }
}

export default UserSchema;
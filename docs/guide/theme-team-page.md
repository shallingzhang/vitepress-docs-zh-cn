<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://github.com/kiaking.png',
    name: 'Kia King Ishii',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' }
    ]
  }
]
</script>

# 团队页面
如果您想介绍您的团队，可以使用团队组件来构建团队页面。使用这些组件有两种方法。一种是将其嵌入文档页面，另一种是创建完整的团队页面。

## 在页面中显示团队成员
您可以使用从`vitebress/theme`公开的`<VPTeamMembers>`组件在任何页面上显示团队成员列表。

```html
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
```
上面将显示一个团队成员的卡片外观元素。它应该显示类似于下面的内容。
<VPTeamMembers size="small" :members="members" />
`<VPTeamMembers>`组件有2种不同的大小，即`small`和`medium`。虽然这取决于您的喜好，但通常在文档页面中使用时，`small`尺寸应该更适合。此外，您可以向每个成员添加更多财产，例如添加“描述”或“赞助商”按钮。在`<VPTeamMembers>`中了解更多信息。

在文档页面中嵌入团队成员对于小型团队来说是很好的，因为他们需要专门的完整团队页面，或者引入部分成员作为文档上下文的参考。

如果您有大量成员，或者只是想有更多空间显示团队成员，请考虑创建一个完整的团队页面。

## 创建一个完整的团队页面
您也可以创建一个完整的团队页面，而不是将团队成员添加到文档页面，这与您创建自定义主页的方式类似。
要创建团队页面，首先创建一个新的`md`文件。文件名不重要，但在这里我们将其称为`team.md`。在此文件中，设置`frontmatter`选项`layout:page`，然后可以使用`TeamPage`组件组成页面结构。

```html
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

```

创建完整的团队页面时，请记住使用`<VPTeamPage>`组件包装所有组件。此组件将确保所有嵌套的与团队相关的组件都获得适当的布局结构，如间距。

`＜VPPageTitle＞`组件添加页面标题部分。标题为`<h1>`标题。使用`#title`和`#lead` 插入关于您团队的文档。

`<VPMembers>`的工作原理与在文档页面中使用时相同。它将显示成员列表。

## 添加分区以划分团队成员

您可以在团队页面中添加“分区”。例如，您可能有不同类型的团队成员，如核心团队成员和社区合作伙伴。您可以将这些成员分成几个部分，以更好地解释每个组的角色。

为此，将`<VPTeamPageSection>`组件添加到我们之前创建的`team.md`文件中。

```html
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [...]
const partners = [...]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
```

这个`<VPTeamPageSection>`组件可以具有与`VPTeamPageTitle`组件类似的`#title`和`#lead` 插槽，以及用于显示团队成员的`#members`插槽。

记住把`#members`插槽放入`<VPTeamMembers>`组件中。

## `<VPTeamMembers>`
这个`<VPTeamMembers>`组件显示给定的成员列表。

```html
<VPTeamMembers
  size="medium"
  :members="[
    { avatar: '...', name: '...' },
    { avatar: '...', name: '...' },
    ...
  ]"
/>
```

```ts
interface Props {
  // Size of each members. Defaults to `medium`.
  size?: 'small' | 'medium'

  // List of members to display.
  members: TeamMember[]
}

interface TeamMember {
  // Avatar image for the member.
  avatar: string

  // Name of the member.
  name: string

  // Title to be shown below member's name.
  // e.g. Developer, Software Engineer, etc.
  title?: string

  // Organization that the member belongs.
  org?: string

  // URL for the organization.
  orgLink?: string

  // Description for the member.
  desc?: string

  // Social links. e.g. GitHub, Twitter, etc. You may pass in
  // the Social Links object here.
  // See: https://vitepress.vuejs.org/config/theme-config.html#sociallinks
  links?: SocialLink[]

  // URL for the sponsor page for the member.
  sponsor?: string
}
```

## `<VPTeamPage>`
创建完整团队页面时的根组件。它只接受一个插槽。它将为所有传入的团队相关组件设置样式。

## `<VPTeamPageTitle>`
添加页面的“标题”部分。最好在`<VPTeamPage>`下开始使用。它接受`#title`和`#lead` 插槽。

```html
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
</VPTeamPage>
```

## `<VPTeamPageSection>`
在团队页面中创建一个“分区”。它接受`#title`、`#lead`和`#members`插槽。您可以在`<VPTeamPage>`中添加任意数量的分区。

```html
<VPTeamPage>
  ...
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Lorem ipsum...</template>
    <template #members>
      <VPTeamMembers :members="data" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
```


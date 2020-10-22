---
title: How To Contribute To Open-Source Projects As A Beginner
date: "2020-07-27T21:36:59.459Z"
author: Renato Ricco
excerpt: |
  #### XXXXXXX
template: post
draft: false
category: "blog"
tags:
  - dev
  - tecnologia
---

# {title}

When I was learning to code, I wanted to make open-source contributions, but I had no idea where and how. Fast forward, I made my first open-source contributions to DEV, and I want to share the Git workflow required to make open-source contributions.

I want to mention that it is the workflow I am using. It is not the only one or the best one. Also, the article assumes basic Git knowledge. Moreover, I want to clarify a common misconception as well. Contributing to open source is not all about writing code. You can contribute by improving the documentation, by organizing stuff, by opening issues, or labeling pull requests.

As a general rule, before starting to contribute, you must read the code of conduct and the contribution guidelines. A code of conduct is a document that establishes expectations for behavior for your project's participants. Adopting, and enforcing, a code of conduct can help create a positive social atmosphere for your community. (Source: Your Open Source Guide) A contribution guideline is a document that explains the workflow you have to respect to make contributions. That includes branch naming conventions, what you should include in a pull request, and more.

Thus, let us see what the process of contributing to open-source projects is.

# Find a project

The most time-consuming task is to find a project where you feel confident enough to make changes. If you are yet to find a project, I recommend checking the first contributions webpage. On the web page, you can find various repositories, which you can filter by technologies. For instance, you can only search for applications written in JavaScript.

However, if you still struggle to find a repository, you can check my OSS Contribution repository. I created it a while ago to help people learn the workflow they use when they make changes to a bigger codebase.

Pick whatever repositories you wish, and let us move to the next step - forking!

# Fork the project

After choosing a project, you need to fork the project. But what does "forking" mean? When you fork a project, you make a copy of the original project. That means you can make any changes you want to the forked repository, without affecting the original one.

How to fork a project? To fork a project, you need to go to the repository's main page and click on the fork button, on the right-hand side. Figure 1 illustrates what you should see.

https://dev-to-uploads.s3.amazonaws.com/i/n8mpaibew1fez7kh8x9l.png

Once you click the button, GitHub redirects you to your copy of the original repo.

But why not clone the repository directly to your machine? The reason is that you do not have access to push changes. Only people who have access to the project can make changes directly to it. Those might be people that created the project, or maintainers.

https://dev-to-uploads.s3.amazonaws.com/i/hs4d7xrdpzt0bylajd9x.png

Figure 2 illustrates what happens if you clone the original repository and try to make changes directly to it. You run into an error because you do not have permission.

Therefore, you need to fork the project, which makes a copy of the original repository on your GitHub account. The forked version is the repository you are going to use.

# Clone the project

After you fork the project, you have to clone the project on your machine to work on it. Go to the repository on your GitHub profile and click on the green button saying "Code".


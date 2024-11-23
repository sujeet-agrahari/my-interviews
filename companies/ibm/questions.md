1. Docker layer and caching in depth

Layers are readonly filesystem.
A Layer is created by RUN, COPY, or ADD.

Best Practices:

1. Combine the number of layers into a single one if possible.

   Bad practice

   ```dockerfile
   RUN apt-get update
   RUN apt-get install -y package1
   RUN apt-get install -y package2
   ```

   Good practice

   ```dockerfile
   RUN apt-get update && apt-get install -y package1 package2
   ```

2. Place less frequently changing instructions (e.g., installing dependencies) at the top and more frequently changing instructions (e.g., copying application code) at the bottom.

   Install dependencies first

   ```dockerfile
   RUN apt-get update && apt-get install -y package1 package2
   ```

   Copy application code last

   ```dockerfile
   COPY . /app
   ```

3. Use Multi-Stage Builds.

4. Rebase vs Merge in depth

   Merge:

   ```
   A---B---C---D (main)
        \     \
         E---F \ (feature-branch)
                \
                 M (merge commit)
   ```

   Rebase:

   Before Rebase:

   ```
   A---B---C---D (main)
        \
         E---F (feature-branch)
   ```

   After Rebase:

   ```
   A---B---C---D---E'---F' (feature-branch)
   ```

5. Pull vs fetch: [StackOverflow](https://stackoverflow.com/a/58743394/9266709)
6. Running a docker container inside another docker container. Is it possible? Give a scenario to use.
7. git clone --depth 1 --branch main https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
   What is shallow cloning?
   --depth 1 will clone only the latest commit data and avoid cloning the whole history which is faster

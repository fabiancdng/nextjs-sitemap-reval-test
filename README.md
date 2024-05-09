# Next.js `sitemap.ts` revalidation demo

## Steps to reproduce
1. Run `npm run build` for the production build of the app
2. Serve with `npm start`
3. Head to [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
4. Change something in the `src/app/test.json` file
5. Wait up to 40s
6. Your `sitemap.xml` should automatically be updated from the contents of the `test.json` file
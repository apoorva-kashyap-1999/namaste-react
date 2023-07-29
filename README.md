# Namaste React🚀 

...
# Parcel
  -Dev build
  -local server
  -HMR (Hot Module Replacement)
  -File Watching Algorithm written in C++
  -Caching (Faster Builds)
  -Image Optimization
  -Bundling
  -Minification
  -Compress files
  -Consistent Hashing
  -Code Splitting
  -Differential Bundling : supports older browser also
  -Diagnostics
  -Error Display View/ Error Handling
  -HTTPs hosting available
  -Tree Shaking : removes unused code
  -Different Dev and PROD builds

# Types of Export/Import
  -Named Export Ex: export const name
  -Default Export Ex: export default CompName

# React Hooks
  -written by Facebook devs
  -normal JS utility functions
  -two very imp hooks: useState() & useEffect()

# Recoinciliation Algorithm / React Fibre
  - In React 16 this new algo came in
  - New way of finding Diff (between the old and updated DOM)
  - Refer acdlite githib for react fibre architecture

# Monolith and MicroService Architecture
  - All services altogether in Monolith
  - In microservices (Single Responsibility Service) there are microservices that comes together to form an app
  - Two ways UI make an API call
    1. Page oads --> Make an ap call --> UI rendered
    2. Page loads --> Render Shimmer UI --> API call --> Rerender UI
  - 2nd approach is better because better UX
          
# CORS Error
  - localhost/:1 Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6357675&lng=88.4382682&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  - For now to bypass CORs we ae using CORS chrome extension    

# Shimmer UI
  - A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear      

# Swiggy API/ API structure gets updated often so you need to keep that in check and change your formatting accordingly.
  - 1.(jsonData?.data?.cards[2]?.data?.data?.cards) - until episode 5
  - 2. (jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) - episode 6




Flow:
1. Create an api with target url http://petstore.swagger.io/v2
2. Talk about SD, authentication options
3. Set Auth as keyless
4. Explain versioning options 
5. Configure versions with `version` header and values in this format `v1.0.0` (so can be used with the swagger on the dev portal later on). Don't choose a default verison so you can see this feature in action.
6. Endpoint designer - scan through the various plugins
7. For version `v1.0.0` add an endpoint for `POST` and demo the Json validation plugin ([paste this schema](https://github.com/TykTechnologies/meetups/blob/master/munich-nov-2018/json-schema-validation.json)
8. Make API call by [posting this](https://github.com/TykTechnologies/meetups/blob/master/munich-nov-2018/pet-post.json).
It doesn't work, you must add the header `version: v1.0.0`.
9. Still doesn't work, you must add the header `Content-Type: application/json` - required by the petstore backend api.
10. Test the schema with a http client - to see the errors you could get remove the status or the id fields, change the id field from int to a string.
11. Test to demonstrate that it doesn't validate for another version such as `v1.0.1`
12. Demonstrate `Modify Headers` plugin - add `Content-Type: application/json` on the request tab and remove it from the api call - shows that the gw can centralised and simplify api calls.
13. Now also add header `Accept: application/xml` to the request tab on the api definition. 
14. You will get an xml as the response. - this helps demo a legacy backend that returns an xml
15. Demo body transform to json on the response tab. Use this template `{{ .| jsonMarshal }}`
16. Also add header in the response tab - `Content-Type: application/json`
17. Test the api and see that you get back formatted json response.
18. Demo the policy and key creation. You can add only one version to the policy and test the key won't work for the other version.
19. Demo the dev portal by publishing the policy as a catalogue.
20. Edit the [petstore swagger] (https://github.com/TykTechnologies/meetups/blob/master/munich-nov-2018/dummy-swagger-petstore.json) with your `host` and `basePath` by replacing the following with yours:
```	
    "host": "tyk-for-demo.cloud.tyk.io",
    "basePath": "/petstore",
```
Also make sure the version name is the same as your api version.
21. Ask for a key and paste it in the swagger to demonstrate the testing end-to-end.





/*
    Create an instance of axios with a baseURL. 

    When the web application is consuming from two separate data sources, two instances of
    axios would be created with different set of `baseURL`. 
*/
const EnvironmentAPI = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment",
});

// Register a click event for <button id="btn1">
$("#btn1").on("click", async () => {
  try {
    // The API call. API returns a promise, hence the use of async and await keyword
    const response = await EnvironmentAPI.get("/air-temperature");

    const records = response.data.items[0].readings;

    console.log(records);

    // Loop through each record and display the data
    records.forEach((element) => {
      console.log(element.station_id, element.value);

      // Loop through each record and display the data
      tbodyEl.append("<tr>");
      tbodyEl.append(
        `<td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">${element.station_id}</td>`
      );
      tbodyEl.append(
        `<td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">${element.value}</td>`
      );
      tbodyEl.append("</tr>");
    });

    // throw "mock error thrown";
  } catch (e) {
    // If API returns an error, display alert message.
    // You may mock this by uncommenting `throw "mock error thrown"` before the catch keyword.
    const msgEl = $("#message");
    msgEl.removeClass("hidden");
    msgEl.append("Unable to fetch data from API");
  }
});

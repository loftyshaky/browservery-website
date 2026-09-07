const show_privacy_policies = () => {
  const query_string = window.location.search.replace("?", "");
  const privacy_policies = document.querySelectorAll(".privacy_policy");

  privacy_policies.forEach((privacy_policy) => {
    if (query_string === "" || privacy_policy.matches(`.${query_string}`)) {
      privacy_policy.classList.add("block");
    }
  });
};

show_privacy_policies();

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  // write your code here
  let name = suiteName.trim();
  let env = environment.trim().toLowerCase();
  
  return (name + " | " + env + " | build-" + buildNumber);
}

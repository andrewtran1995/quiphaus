package configuration

import (
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v2"
)

// Configuration -- Structure that contains mainly database configuration details.
type Configuration struct {
	Port     string `yaml:"Port"`
	Postgres struct {
		URL      string `yaml:"url"`
		Dbname   string `yaml:"dbname"`
		Username string `yaml:"username"`
		Password string `yaml:"password"`
	}
}

const configurationFilename = "configuration.yaml"

// New -- Construct a new Configuration instance and returns it.
func New() *Configuration {
	configuration := Configuration{}
	configurationFile, err := ioutil.ReadFile(configurationFilename)
	if err != nil {
		log.Fatal(err)
	}

	err = yaml.Unmarshal(configurationFile, configuration)
	if err != nil {
		log.Fatal(err)
	}

	return &configuration
}

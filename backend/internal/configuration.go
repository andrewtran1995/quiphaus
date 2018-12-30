package configuration

type Constants struct {
	PORT     string
	Postgres struct {
		url      string
		dbname   string
		username string
		password string
	}
}

// +build mage

package main

import (
	"fmt"
	"os"
	"os/exec"

	"github.com/magefile/mage/mg" // mg contains helpful utility functions, like Deps
	"github.com/magefile/mage/sh"
)

// Default target to run when none is specified
// If not set, running mage will list available targets
// var Default = Build

// A build step that requires additional params, or platform specific steps for example
func BuildFE() error {
	mg.Deps(InstallDepsFE)
	fmt.Println("Building client...")
	os.Chdir("./client")
	defer os.Chdir("..")
	cmd := exec.Command("npm", "run", "build")
	return cmd.Run()
}

// Manage your deps, or running package managers.
func InstallDepsFE() error {
	fmt.Println("Installing Deps for client...")
	os.Chdir("./client")
	defer os.Chdir("..")
	cmd := exec.Command("npm", "install")
	return cmd.Run()
}

func FeDev() error {
	fmt.Println("Starting client dev server...")
	os.Chdir("./client")
	defer os.Chdir("..")
	err := sh.Run("npm", "run", "dev")
	return err
}

// Clean up after yourself
// func Clean() {
// 	fmt.Println("Cleaning...")
// 	os.RemoveAll("MyApp")
// }
